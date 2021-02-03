import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

export default function navBar({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}> YUNG MEN </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#67ff4d",
    textAlignVertical: "center",
    width: "100%",
    height: "100%",
    top: "0%",
    zIndex: 1,
  },
  logo: {
    position: "relative",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'sans-serif-medium',
    fontStyle: 'italic',
    letterSpacing: 2,
    color: 'white',
    flex: 3,
  },
});
