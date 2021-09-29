import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import HomePage from "./HomePage";

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Gayan</Text>
      <Image style={styles.image} source={require("../assets/arcade.png")} />
      <TouchableOpacity
        style={styles.TouchButton}
        onPress={() => NavigateToHomePage(navigation)}
      >
        <Text style={styles.TouchButtonText}>Let's do</Text>
        <MaterialIcon
          name="arrow-forward-ios"
          size={22}
          color={"#fff"}
        ></MaterialIcon>
      </TouchableOpacity>
    </View>
  );
};

function NavigateToHomePage(navigation) {
  navigation.navigate("Home");
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  Text: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "GemunuLibre-ExtraBold",
  },
  TouchButton: {
    backgroundColor: "purple",
    width: "90%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginBottom: 20,
  },
  TouchButtonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default NavigationStack;
