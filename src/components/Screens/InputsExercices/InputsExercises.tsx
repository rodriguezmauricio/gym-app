import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Checkbox from "../../Checkbox/Checkbox";

const InputsExercises = () => {
  return (
    <View>
      <Text>Inputs Exercises</Text>

      <TextInput placeholder="Nome do Exercício" />

      <TextInput placeholder="Séries" />

      <TextInput placeholder="Reps" />

      <TextInput placeholder="Carga" />

      <Checkbox content="Cada lado" />
    </View>
  );
};

export default InputsExercises;

const styles = StyleSheet.create({});
