import * as firebase from 'firebase';
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Card from "../component/card";
import Videos from "./videos";

export default function home() {
  const [cards, setCards] = useState([
    {
      title: "Boom Box Bois",
      intro: "These bois just cant get enough of their anime",
      uri: require("../gg.png"),
      key: "1",
    },
    {
      title: "Girl Problems",
      intro: "Why the bois need boi days",
      uri: require("../GreenhouseGaming.jpg"),
      key: "2",
    },
    {
      title: "Yung Men Lifestyle",
      intro: "Take an inside look at the Yung Men",
      uri: require("../gg.png"),
      key: "3",
    },
    {
      title: "Yung Men Lifestyle",
      intro: "Take an inside look at the Yung Men",
      uri: require("../GreenhouseGaming.jpg"),
      key: "4",
    },
    {
      title: "Yung Men Lifestyle",
      intro: "Take an inside look at the Yung Men",
      uri: require("../GreenhouseGaming.jpg"),
      key: "5",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.cc}
        data={cards}
        renderItem={({ item }) => (
          <View style={styles.tc}>
            <Card title={item.title} intro={item.intro} source={item.uri} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  cc: {
    overflow: "hidden",
  },
  tc: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    width: "100%",
  },
  text: {
    alignSelf: "center",
  },
});

