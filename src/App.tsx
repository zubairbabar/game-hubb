import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import NavBar from "./component/NavBar";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./component/hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
//setting up responsive layout
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
