import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Nav from "../component/navBar";
const Drawer = createDrawerNavigator();
export const drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
