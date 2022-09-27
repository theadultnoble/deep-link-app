import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Linking from "expo-linking";

const Home = () => {
  const prefix = Linking.createURL("/settings");
  console.log(prefix);
  return (
    <View style={styles.container}>
      <Button title="Deep Link" onPress={() => Linking.openURL(prefix)} />
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
