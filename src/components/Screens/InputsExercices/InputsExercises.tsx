import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Checkbox from "../../Checkbox/Checkbox";
import { themeColors } from "../../styles/CompStyles";

const InputsExercises = () => {
  return (
    <View style={styles.container}>
      <Text>Inputs Exercises</Text>

      <TextInput placeholder="Nome do Exercício" style={styles.inputs} />

      <TextInput placeholder="Séries" style={styles.inputs} />

      <TextInput placeholder="Reps" style={styles.inputs} />

      <TextInput placeholder="Carga" style={styles.inputs} />

      <Checkbox content="Cada lado" />
    </View>
  );
};

export default InputsExercises;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  inputs: {
    borderColor: themeColors.grey,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
