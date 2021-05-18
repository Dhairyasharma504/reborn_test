import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Button_square from "../components/Button_square";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Go to About Screen</Text>

      <Button_square
      square_button="ffvfgb"
      />
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#dcfffd",

    textAlign: "center",
  },
});

export default Home;