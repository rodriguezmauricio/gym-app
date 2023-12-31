import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExerciseListItem from "./src/components/exerciseListItem/ExerciseListItem";
import WorkoutCover from "./src/components/workoutCover/WorkoutCover";
import AddWorkout from "./src/components/AddWorkout/AddWorkout";
import InputsExercises from "./src/components/Screens/InputsExercices/InputsExercises";
import AvatarHeader from "./src/components/AvatarHeader/AvatarHeader";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <AvatarHeader />
      <AddWorkout />
      <InputsExercises />
      <StatusBar style="auto" />
      <WorkoutCover />
      <ExerciseListItem />
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
