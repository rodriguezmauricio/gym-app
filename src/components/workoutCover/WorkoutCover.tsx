import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { TextGrey, TextLight, TitleDark } from "../styles/CompStyles";

const WorkoutCover = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        imageStyle={{ borderRadius: 15 }}
        source={{ uri: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" }}
      >
        <View style={styles.infoContent}>
          <TitleDark>Push Day</TitleDark>
          <TextLight>Peito | Ombros | Tríceps</TextLight>
          <TextLight>9 exercícios</TextLight>
          <TextLight>2 horas</TextLight>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WorkoutCover;

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  bgImage: {
    flex: 1,
    borderRadius: 15,
  },
  infoContent: {
    padding: 15,
  },
});
