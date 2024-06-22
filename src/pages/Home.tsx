import { Container, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ height: "75vh", m: 2 }}>
          <img
            src={require("../../src/assets/images/home_page_header.png")}
            alt="placeholder image"
          />
        </Box>
      </Container>
    </>
  );
}
