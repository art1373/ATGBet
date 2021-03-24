import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Strings from "../Values/Strings";
import Home from "../Containers/Home/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Entypo";
import { Colors } from "../Theme";
import About from "../Containers/About/About";

const Tab = createBottomTabNavigator();

export const BottomTabStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
        showLabel: false,
      }}
      initialRouteName={Strings.Routes.HOME}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="horse-head" color={color} size={35} />
          ),
        }}
        name={Strings.Routes.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon2 name="info" color={color} size={35} />
          ),
        }}
        name={Strings.Routes.ABOUT}
        component={About}
      />
    </Tab.Navigator>
  );
};
