import {
  Container,
  Box,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import data from "config/data.json";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
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
        <Grid container justifyContent="center">
          {data.data.map((item) => (
            <Grid item xs={3} sx={{ m: 2 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={require("assets/images/plants/" + item.img)}
                  title="green monstera plant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
