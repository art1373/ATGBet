import React from "react";
import { FlatList } from "react-native";
import GameItem from "../GameItem/GameItem";
import { Title } from "native-base";
import { Colors } from "App/Theme";
import styles from "./style";
import { useNavigation } from "@react-navigation/core";
import Strings from "../../Values/Strings";
const GameListing = ({ results, upcoming, betType }) => {
  const { navigate } = useNavigation();
  return (
    <>
      <Title style={{ color: Colors.primary }}>Ongoing Games({betType})</Title>

      <FlatList
        data={results}
        ListEmptyComponent={() => (
          <Title style={{ color: Colors.secondary }}>
            No Upcoming game yet!
          </Title>
        )}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item, index }) => (
          <GameItem
            onPress={() => navigate(Strings.Routes.RACES, { gameId: item?.id })}
            game={item}
            index={index}
            betType={betType}
          />
        )}
      />
      {/* <FlatList
        data={upcoming}
        ListHeaderComponent={() => <Title>Upcoming Games</Title>}
        ListEmptyComponent={() => <Title>No Upcoming game yet!</Title>}
        contentContainerStyle={{ marginTop: 20, paddingVertical: 20 }}
        renderItem={({ item, index }) => <GameItem game={item} index={index} />}
      /> */}
    </>
  );
};

export default GameListing;
