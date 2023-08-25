import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const WorkoutCover = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={{ uri: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" }}
      >
        <View style={styles.infoContent}>
          <Text style={styles.title}>Push Day</Text>
          <Text>Peito | Ombros | Tríceps</Text>
          <Text>9 exercícios</Text>
          <Text>2 horas</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WorkoutCover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  bgImage: {
    flex: 1,
  },
  infoContent: {
    padding: 15,
  },
});
