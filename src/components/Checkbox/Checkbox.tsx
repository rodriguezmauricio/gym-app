import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { themeColors } from "../styles/CompStyles";

interface TCheckbox {
  content: string;
}

const Checkbox = ({ content }: { content: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxChange}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 24,
            height: 24,
            borderWidth: 2,
            borderColor: themeColors.grey,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isChecked ? themeColors.lightSeaGreen : "transparent", // Adicionamos a cor de fundo com base no estado do checkbox
          }}
        >
          {isChecked && (
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: themeColors.lightSeaGreen,
              }}
            />
          )}
        </View>
        <Text style={{ marginLeft: 8 }}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  box: {
    backgroundColor: themeColors.grey,
    borderRadius: 5,
  },
});
