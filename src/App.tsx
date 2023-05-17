import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import NavBar from "./component/NavBar";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./component/hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./component/hooks/useGames";
import SortSelector from "./component/SortSelector";

//Refactoring code
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

//setting up responsive layout
function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex padding={2} marginBottom={5}>
          <Box marginRight={"50px"}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          ></SortSelector>
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
