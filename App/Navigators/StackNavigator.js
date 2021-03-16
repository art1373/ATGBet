import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../Values/Strings";
import SplashScreen from "App/Containers/SplashScreen/SplashScreen";
const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Strings.Routes.SPLASH_SCREEN}
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};
