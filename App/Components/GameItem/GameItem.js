import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { View } from "react-native-animatable";
import {
  Card,
  CardItem,
  Thumbnail,
  Text as NBaseText,
  Button,
  Left,
  Body,
  Right,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, Images } from "App/Theme";
import { dateToMonthAndYear } from "../../utils/dateStr";

const GameItem = ({ game, index, betType, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        animation="slideInUp"
        duration={800}
        delay={index * 180}
        useNativeDriver
      >
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={Images.logo} />
              <Body>
                <NBaseText>{game?.tracks[0]?.name}</NBaseText>
                <NBaseText note>{betType}</NBaseText>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://www.swedishhorseracing.com/assets/tmpImages/featured-tmp.jpg",
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon
                  active
                  name="attach-money"
                  size={25}
                  color={Colors.primary}
                />
                <NBaseText>{game?.totalToWin?.toLocaleString()}</NBaseText>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon
                  active
                  name="calendar-today"
                  size={25}
                  color={Colors.secondary}
                />
                <NBaseText>{dateToMonthAndYear(game?.startTime)}</NBaseText>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default GameItem;
