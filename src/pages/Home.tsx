import PlantCard from "@components/PlantCard";
import { Container, Box, Grid } from "@mui/material";

import data from "config/plant_data.json";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ m: 2 }}>
            <img
              src={require("../../src/assets/images/home/home_page_header.png")}
              alt="placeholder image"
            />
          </Box>
        </Grid>
      </Grid>

      <PlantCard plants={data} />
    </>
  );
}
