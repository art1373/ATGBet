import React from "react";
import { Text } from "react-native";
import { Container } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { gamesSelector, racesSelector } from "../../Stores/gameData/selectors";
import {
  fetchProductsByGameType,
  fetchRaces,
} from "../../Stores/gameData/actions";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(gamesSelector);
  const races = useSelector(racesSelector);
  console.log({ games, races });
  React.useEffect(() => {
    dispatch(fetchProductsByGameType("V75"));
  }, []);
  React.useEffect(() => {
    if (games) {
      dispatch(fetchRaces("V75_2018-05-12_6_5"));
    }
  }, [games]);
  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
};

export default Home;
