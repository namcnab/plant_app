import { useLocation } from "react-router-dom";
import data from "config/data.json";

export default function PlantDetails() {
  const location = useLocation();
  const plant = data.data.find((item) => item.id === location.state.id);

  return (
    <div>
      <h2>{plant.name}</h2>
      <img
        src={require("assets/images/plants/" + plant.img)}
        alt={plant.title}
        style={{ maxHeight: "75vh" }}
      />
      <h3>Average Height: {plant.height}</h3>
    </div>
  );
}
