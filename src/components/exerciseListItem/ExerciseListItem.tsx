import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ExerciseListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg" }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Pull Down Unilateral</Text>
        <View style={styles.setReps}>
          <Text style={styles.text}>3 series /10 reps</Text>
        </View>
        <View style={styles.kgs}>
          <Text style={styles.text}>55 kgs</Text>
        </View>
      </View>
    </View>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#ddd",
    marginVertical: 10,
    borderRadius: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  infoContainer: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
  setReps: {
    backgroundColor: "#222",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  kgs: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
});
