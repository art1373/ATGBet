import React from "react";
import { FlatList } from "react-native";
import GameItem from "../GameItem/GameItem";
import { Title } from "native-base";
import { Colors } from "App/Theme";
import styles from "./style";
import { useNavigation } from "@react-navigation/core";
import Strings from "../../Values/Strings";
const GameListing = ({ results, upcoming, betType, testID }) => {
  const { navigate } = useNavigation();
  return (
    <>
      <Title testID="txt" style={{ color: Colors.primary }}>
        Ongoing Games({betType})
      </Title>

      <FlatList
        testID={testID}
        data={results}
        keyExtractor={(game) => game.id}
        ListEmptyComponent={() => (
          <Title style={{ color: Colors.secondary }}>
            No Upcoming game yet!
          </Title>
        )}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item, index }) => (
          <GameItem
            testID="gameItem"
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
