import React from "react";
import { Text } from "react-native";
import { Container, Picker, GameListing } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { gamesSelector, racesSelector } from "../../Stores/gameData/selectors";
import {
  fetchProductsByGameType,
  fetchRaces,
} from "../../Stores/gameData/actions";
import { pickerOptions } from "../../Values/Constansts";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(gamesSelector);
  const races = useSelector(racesSelector);
  const [game, setgame] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchProductsByGameType(game));
  }, [game]);

  return (
    <Container>
      <Picker
        selected={game}
        onValueChange={(val) => setgame(val)}
        options={pickerOptions}
      />
      <GameListing
        betType={games?.betType}
        upcoming={games?.upcoming}
        results={games?.results}
      />
    </Container>
  );
};

export default Home;
