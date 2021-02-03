import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/home";


const Stack = createStackNavigator();

export default homeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  
});
