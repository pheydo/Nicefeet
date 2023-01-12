import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Component.js/Navigation";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
