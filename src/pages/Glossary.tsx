import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { capitalizeFirstLetter } from "../utils/format";
import data from "../config/glossary_data.json";
import { useState } from "react";

function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState("");

  // Assuming `data.glossary.terms` is your data array
  const filteredTerms = data.glossary.terms.filter((term) =>
    selectedLetter
      ? term.term.toLowerCase().startsWith(selectedLetter.toLowerCase())
      : true
  );

  const resetFilter = () => {
    setSelectedLetter(""); // Reset the search query, showing all terms
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h1>Glossary</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "3%",
            textAlign: "center",
          }}
        >
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            .split("")
            .map((letter, index, array) => (
              <span
                key={index}
                style={{ cursor: "pointer", fontSize: "25px" }}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
                {index < array.length - 1 ? " | " : ""}
              </span>
            ))}
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={resetFilter}>
            View All
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableRow>
                <TableCell>
                  <b>Term</b>
                </TableCell>
                <TableCell>
                  <b>Definition</b>
                </TableCell>
              </TableRow>
              <TableBody>
                {filteredTerms.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <b>{capitalizeFirstLetter(item.term)}</b>
                    </TableCell>
                    <TableCell>{item.definition}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Glossary;
