import { useLocation } from "react-router-dom";
import data from "config/data.json";
import { Box, Container, Grid } from "@mui/material";

export default function PlantDetails() {
  const location = useLocation();
  const plant = data.data.find((item) => item.id === location.state.id);

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
            <h2>Plant Care</h2>
            <p>
              <b>Light:</b> {plant.care.light}
            </p>
            <p>
              <b>Water:</b> {plant.care.water}
            </p>
            <p>
              <b>Temperature:</b> {plant.care.temperature}
            </p>
            <p>
              <b>Humidity:</b> {plant.care.humidity}
            </p>
            <p>
              <b>Soil:</b> {plant.care.soil}
            </p>
            <p>
              <b>Fertilizer:</b> {plant.care.fertilizer}
            </p>
            <p>
              <b>Propagation:</b> {plant.care.propogation}
            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
