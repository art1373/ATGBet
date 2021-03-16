import React from "react";
import { AppNavigator } from "../../Navigators/AppNavigator";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import { Helpers } from "../../Theme";

const RootScreen = (props) => {
  return (
    <View style={Helpers.fill}>
      <AppNavigator />
    </View>
  );
};

RootScreen.propTypes = {
  startup: PropTypes.func,
};

export default RootScreen;
