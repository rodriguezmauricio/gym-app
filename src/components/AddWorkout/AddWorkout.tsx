import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeColors } from "../styles/CompStyles";
import { AntDesign } from "@expo/vector-icons";

const AddWorkout = () => {
  return (
    <View style={styles.container}>
      <Text>Add New Workout</Text>
      <AntDesign name="pluscircle" size={36} color="black" />
    </View>
  );
};

export default AddWorkout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.lightSeaGreen,
    padding: 16,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
