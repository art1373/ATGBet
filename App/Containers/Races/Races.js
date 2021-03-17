import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchRaces } from "../../Stores/gameData/actions";
import { useDispatch } from "react-redux";
const Races = () => {
  const dispatch = useDispatch();
  const { gameId } = useRoute().params;
  React.useEffect(() => {
    if (gameId) {
      dispatch(fetchRaces(gameId));
    }
  }, [gameId]);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Races;
