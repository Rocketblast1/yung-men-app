import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default menu = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.openDrawer();
    }}>
      <MaterialIcons name={"menu"} size={25} color={"white"} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    icon: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        top: "0%",
        flex: 1,
        padding: 20,
    }
})
