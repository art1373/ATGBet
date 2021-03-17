import React from "react";
import { StackActions, useNavigation } from "@react-navigation/core";
import Strings from "../../Values/Strings";
import RNBootSplash from "react-native-bootsplash";

const SplashScreen = () => {
  const { dispatch } = useNavigation();
  React.useEffect(() => {
    dispatch(StackActions.replace(Strings.Routes.MAIN));
    RNBootSplash.hide({ fade: true });
  }, []);
  return null;
};
export default SplashScreen;
