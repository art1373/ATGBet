import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Helpers, Colors } from "App/Theme";
import { ContianerProps } from "./types";

const Container = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...Helpers.fill }}>
        <SafeAreaView style={{ backgroundColor: Colors.transparent }} />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = ContianerProps;

export default Container;
