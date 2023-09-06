import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TextGrey } from "../styles/CompStyles";

const AvatarHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <TextGrey>AvatarHeader</TextGrey>
        <Text style={styles.name}>Nicolas Doflamingo</Text>
      </View>
      <View>
        <AntDesign name="bells" size={24} color="black" />
      </View>
    </View>
  );
};

export default AvatarHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
});
