import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchRaces } from "../../Stores/gameData/actions";
import { racesSelector } from "../../Stores/gameData/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RaceItem from "../../Components/RaceItem/RaceItem";
const Races = () => {
  const dispatch = useDispatch();
  const races = useSelector(racesSelector);

  const { gameId } = useRoute().params;
  React.useEffect(() => {
    if (gameId) {
      dispatch(fetchRaces(gameId));
    }
  }, [gameId]);
  return (
    <>
      {races && (
        <FlatList
          contentContainerStyle={{ paddingVertical: 20 }}
          data={races && races}
          keyExtractor={(race) => race.id}
          renderItem={({ item, index }) => (
            <RaceItem index={index} race={item} />
          )}
          ListEmptyComponent={
            <ActivityIndicator color={Colors.primary} size={60} />
          }
        />
      )}
    </>
  );
};

export default Races;
