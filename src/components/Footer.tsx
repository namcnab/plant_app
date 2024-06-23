import {
  Box,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#558b2f",
      contrastText: "#000 ",
    },
  },
});

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0", // Add some padding for spacing
        backgroundColor: customTheme.palette.secondary.main, // Use custom color from theme
      }}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} sm={4} textAlign="center">
          <Typography variant="body1">
            93846 West Pueblo Avenue, Garden, Arizona 41962 USA
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} textAlign="center">
          <Link href="/privacy-policy" color="inherit" underline="none">
            Privacy Policy
          </Link>
          <Typography component="span" sx={{ margin: "0 8px" }}>
            |
          </Typography>
          <Link href="/terms-of-use" color="inherit" underline="none">
            Terms of Use
          </Link>
          <Typography component="span" sx={{ margin: "0 8px" }}>
            |
          </Typography>
          <Link href="/contact-us" color="inherit" underline="none">
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={4} sm={4} textAlign="center">
          <Typography variant="body1">© 2024 Plant App</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
