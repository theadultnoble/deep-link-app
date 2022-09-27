import React from "react";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";

const prefix = Linking.createURL("/");
console.log(prefix);

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
      },
    },
  };

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
