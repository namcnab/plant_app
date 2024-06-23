import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface PlantData {
  data: {
    img: string;
    imgAlt: string;
    common_name: string;
    description: string;
  }[];
}

interface PlantCardProps {
  plants: PlantData;
}

function PlantCard(props: PlantCardProps) {
  const navigate = useNavigate();

  const navigateToPlantDetails = (id: string) => {
    navigate("/plant_details", { state: { id } });
  };

  return (
    <>
      {props.plants.data.map((item: any) => (
        <Grid item xs={3} sx={{ m: 2 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={require("assets/images/plants/" + item.img)}
              title={item.imgAlt}
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
              <Button
                size="small"
                onClick={() => navigateToPlantDetails(item.id)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default PlantCard;
