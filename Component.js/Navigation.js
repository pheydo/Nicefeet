import {} from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabnavigation from "./Tabnavigation";
import Welcomescreen from "../Screen.js/Welcomescreen";
import Home from "../Screen.js/Home";
import Nike from "../Screen.js/Nike";
import Running from "../Screen.js/Running";
import Productdetail from "../Screen.js/Productdetail";
import Productdetails from "../Screen.js/Productdetails";
import Animation from "../Screen.js/Animation"

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
    
    screenOptions={{

        headerShown:false
     } }
    >
       <Stack.Screen name="Welcomescreen" component={Welcomescreen} />
     
       <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
       <Stack.Screen name="nike" component={Nike} />
       <Stack.Screen name="Running" component={Running} />
       <Stack.Screen name="Productdetail" component={Productdetail} />
       <Stack.Screen name="Productdetails" component={Productdetails} />
       <Stack.Screen name="Animation" component={Animation} />
        
    </Stack.Navigator>
  );
};

export default Navigation;
