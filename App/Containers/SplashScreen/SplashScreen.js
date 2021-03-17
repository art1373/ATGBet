import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./SplashScreenStyle";
import { Helpers } from "App/Theme";
import { useNavigation } from "@react-navigation/core";
import Strings from "../../Values/Strings";

const SplashScreen = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    navigate(Strings.Routes.HOME);
  }, []);
  return (
    <View style={[Helpers.fillRowCenter, styles.container]}>
      <View style={[Helpers.center, styles.logo]}>
        <Text>LOGO</Text>
      </View>
    </View>
  );
};
export default SplashScreen;
