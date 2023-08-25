import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExerciseListItem from "./src/components/exerciseListItem/ExerciseListItem";
import WorkoutCover from "./src/components/workoutCover/WorkoutCover";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <WorkoutCover />
      <ExerciseListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
