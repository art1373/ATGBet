import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../Values/Strings";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import Home from "../Containers/Home/Home";
const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Strings.Routes.SPLASH_SCREEN}
        component={SplashScreen}
      />
      <Stack.Screen name={Strings.Routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};
