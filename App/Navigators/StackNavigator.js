import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../Values/Strings";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import { BottomTabStack } from "./BottomNav";
import { Colors } from "App/Theme";
import Races from "../Containers/Races/Races";

const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTitleStyle: { color: Colors.secondary },
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Stack.Screen
        name={Strings.Routes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ title: "Home" }}
        name={Strings.Routes.MAIN}
        component={BottomTabStack}
      />
      <Stack.Screen name={Strings.Routes.RACES} component={Races} />
    </Stack.Navigator>
  );
};
