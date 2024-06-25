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
  TablePagination,
} from "@mui/material";
import { capitalizeFirstLetter } from "../utils/format";
import data from "../config/glossary_data.json";
import { useState } from "react";

function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const resetFilter = () => {
    setSelectedLetter(""); // Reset the search query, showing all terms
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page with the new number of items per page
  };

  // Assuming `data.glossary.terms` is your data array
  const filteredTerms = data.glossary.terms.filter((term) => {
    // If no letter is selected, show all terms
    if (!selectedLetter) return true;
    // Otherwise, show only terms that start with the selected letter
    return term.term.toLowerCase().startsWith(selectedLetter.toLowerCase());
  });

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
                {filteredTerms
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <b>{capitalizeFirstLetter(item.term)}</b>
                      </TableCell>
                      <TableCell>{item.definition}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredTerms.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Glossary;
