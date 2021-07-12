import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import SearchBar from "./SearchBar.js";
import Texto from "./Texto";
import cities from "../helpers/Cities.js";
import useStyles from "../styles/Table-Styles";
import GetWeather from "../helpers/GetWeather";
import { useState } from "react";

export default function CitiesTable() {
  const [temperature, setTemperature] = useState([""]);
   const checkTemperature = (name) => {
    GetWeather(name).then((res) => {
      setTemperature(res);
    });
  };
  console.log(`Este es un estado:${temperature}`);
  const classes = useStyles();
  return (
    <div>
      <SearchBar />
      <Texto temp={temperature} />
      <div>
        <TableContainer className={classes.TableContainer} component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Weather</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cities.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => checkTemperature(row.name)}
                    >
                      Click me
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
