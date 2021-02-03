import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function card({ title, intro, source }) {
  const window = Dimensions.get("screen");
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        ImageResizeMode={"cover"}
        source={source}
      >
        <View style={styles.content}></View>
        <LinearGradient colors={[ "rgba(0, 0, 0, 0.01)", "rgba(0, 0, 0, 0.30)",]} style={styles.gradient} start={[0.8,0.3]} end={[0.46, 1.9]}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.intro}> {intro} </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: "0%",
    width: "100%",
    height: Dimensions.get("screen").height / 4,
    backgroundColor: "#67ff4d",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 4,

    elevation: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    transform: [{ translateX: 2.5 }, { translateY: 2.5 }],
    borderRadius: 10,
    overflow: "hidden",
  },
  content: {
    position: "relative",
    width: "100%",
    height: "100%",
    transform: [{ translateX: 2.5 }, { translateY: 2.5 }],
    backgroundColor: "#f2f2f2",
    opacity: 0.09,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    textAlignVertical: "center",
    width: "90%",
    height: "50%",
    color: "#67ff4d",
    fontSize: 30,
    opacity: 1,
    left: '0%',
    fontWeight: "bold",
    top: "0%",
  },
  intro: {
    position: "absolute",
    textAlignVertical: "center",
    overflow: 'hidden',
    width: "90%",
    height: "50%",
    left: '1.3%',
    color: "#67ff4d",
    fontSize: 18,
    fontWeight: "bold",
    top: "40%",
  },
  gradient: {
    margin: 10,
    position: "absolute",
    width: "96%",
    height: "35%",
    top: "55%",
    overflow: "hidden",
    elevation: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 70,
  },
});
