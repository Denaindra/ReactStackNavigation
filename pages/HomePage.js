import React from "react";
import { View, Text, StyleSheet } from "react-native";

function HomePage(props) {
  return (
    <View style={styles.mainContainer}>
      <Text>Hellow World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
