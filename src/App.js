import { Box, Container } from "@material-ui/core";
import "./App.css";
import CitiesTable from "./components/CitiesTable";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Container fixed>
        <Box>
        <CitiesTable />
        </Box>
      </Container>
    </div>
  );
}

export default App;
