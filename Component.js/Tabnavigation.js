import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screen.js/Home";
import Payment from "../Screen.js/Payment";
import Cart from "../Screen.js/Cart";
import Profile from "../Screen.js/Profile";

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Payment history" component={Payment } />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
