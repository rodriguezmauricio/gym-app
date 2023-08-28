import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeColors } from "../styles/CompStyles";

const Button = (text: string) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: themeColors.black,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
