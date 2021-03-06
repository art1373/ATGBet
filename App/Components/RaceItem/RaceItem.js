import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text as NBaseText,
  Title,
  Button,
  Left,
  Body,
  Right,
} from "native-base";
import styles from "./styles";
import { View } from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";
import { Colors, Images } from "App/Theme";
import { dateToMonthAndYear } from "../../utils/dateStr";
import { RaceProps } from "./types";

const RaceItem = ({ race, index }) => {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <View
      key={index}
      animation="fadeInRight"
      duration={800}
      delay={index * 180}
      useNativeDriver
    >
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={Images.logo} />
            <Body>
              <NBaseText>{race?.name}</NBaseText>
              <NBaseText note>{dateToMonthAndYear(race?.startTime)}</NBaseText>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://www.swedishhorseracing.com/assets/tmpImages/featured2-tmp.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon3
                active
                name="stats-chart"
                size={25}
                color={Colors.primary}
              />
              <Title>Race No.{race?.number}</Title>
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
              <NBaseText>{dateToMonthAndYear(race?.startTime)}</NBaseText>
            </Button>
          </Body>
          <Right>
            <TouchableOpacity
              style={{ paddingHorizontal: 20 }}
              onPress={() => setCollapsed(!collapsed)}
            >
              <Icon2
                name={collapsed ? "caretdown" : "caretup"}
                size={25}
                color={Colors.blueMild}
              />
            </TouchableOpacity>
          </Right>
        </CardItem>
        <Collapsible collapsed={collapsed}>
          {race?.starts.map((s) => (
            <View style={styles.collapsedCol}>
              <View style={styles.row}>
                <Title>Start No.{s.number}</Title>
                <View style={styles.rowInner}>
                  <Title>Horse name:</Title>
                  <NBaseText>{s.horse.name}</NBaseText>
                </View>
                <View style={styles.rowInner}>
                  <Title>Rider:</Title>
                  <NBaseText>{`${s.driver.firstName}  ${s.driver.lastName}`}</NBaseText>
                </View>
                <View style={styles.rowInner}>
                  <Title>Trainer:</Title>
                  <NBaseText>{`${s.horse.trainer.firstName}  ${s.horse.trainer.lastName}`}</NBaseText>
                </View>
              </View>
            </View>
          ))}
        </Collapsible>
      </Card>
    </View>
  );
};
RaceItem.propTypes = RaceProps;

export default RaceItem;
