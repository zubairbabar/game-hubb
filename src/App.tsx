import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import NavBar from "./component/NavBar";
//setting up responsive layout
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        Nav
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
