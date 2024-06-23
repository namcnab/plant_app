import { useLocation } from "react-router-dom";
import data from "config/data.json";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import PublicIcon from "@mui/icons-material/Public";
import GrassIcon from "@mui/icons-material/Grass";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const iconMapping = {
  light: <WbSunnyIcon sx={{ mr: 1 }} />,
  water: <WaterDropIcon sx={{ mr: 1 }} />,
  temperature: <ThermostatIcon sx={{ mr: 1 }} />,
  humidity: <OpacityIcon sx={{ mr: 1 }} />,
  soil: <PublicIcon sx={{ mr: 1 }} />,
  fertilizer: <GrassIcon sx={{ mr: 1 }} />,
  propogation: <ContentCutIcon sx={{ mr: 1 }} />,
};

export default function PlantDetails() {
  const location = useLocation();
  const plant = data.data.find((item) => item.id === location.state.id);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h1>{plant.common_name}</h1>
        </Grid>
        <Grid item xs={12}>
          <img
            src={require("assets/images/plants/" + plant.additionalImg)}
            alt={plant.imgAlt}
            width={250}
            height={250}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ m: 2 }}>
            <p>
              <b>Botanical Name:</b> {plant.scientific_name}
            </p>
            <p>
              <b>Origin:</b> {plant.origin}
            </p>
            <p>
              <b>Description:</b> {plant.description}
            </p>
            <p>
              <b>History:</b> {plant.history}
            </p>

            <Divider></Divider>

            <h2>Plant Care</h2>
            {Object.entries(plant.care).map(([key, value]) => (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box display="flex" alignItems="center">
                    {iconMapping[key] || <WbSunnyIcon sx={{ mr: 1 }} />}
                    <h2>{capitalizeFirstLetter(key)}</h2>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>{value}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
