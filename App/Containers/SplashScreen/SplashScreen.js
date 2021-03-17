import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./SplashScreenStyle";
import { Helpers } from "App/Theme";
import { useNavigation } from "@react-navigation/core";
import Strings from "../../Values/Strings";
import RNBootSplash from "react-native-bootsplash";

const SplashScreen = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    navigate(Strings.Routes.HOME);
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 2000);
  }, []);
  return null;
};
export default SplashScreen;
