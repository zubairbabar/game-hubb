import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import NavBar from "./component/NavBar";
import GenreList from "./component/GenreList";
//setting up responsive layout
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        Nav
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
