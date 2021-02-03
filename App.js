import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import Menu from "./component/menu";
import Nav from "./component/navBar";
import Profile from "./component/profile";
import HomeStack from "./stacks/homeStack";
import Videos from "./screens/videos";
import Card from "./component/card";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Window = Dimensions.get("window");
  const Screen = Dimensions.get("screen");
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const signOut = async () => {
    await auth().signOut();
  };

  if (initializing) return null;

  const loginEmailPassword = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
      });
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .uppercase(1 ,"Needs at least 1 upercase")
      .lowercase(1, 'Needs at least 1 lowercase')
      .matches()
      .required("Required"),
  });

  if (!user) {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          loginEmailPassword(values.email, values.password)
          auth().signInWithEmailAndPassword(values.email, values.password)
          auth().onAuthStateChanged(onAuthStateChanged)
        }}
      >
        {({ handleChange, handleBlur, setTouched, handleSubmit, values, errors, touched }) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <TextInput
                style={styles.signupTextInput}
                placeholder={"Email"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur('email')}
                onPress={setTouched.email}
                value={values.email}
              />
              <Text>{touched.email ? errors.email : ''}</Text>

              <TextInput
                style={styles.signupTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur('password')}
                onPress={setTouched.password}
                value={values.password}
              />
              <Text>{touched.password ? errors.password : ''}</Text>

              <Button
                style={styles.signupButton}
                title={"Submit"}
                onPress={handleSubmit}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    );
  }

  return (
    <View>
      <Text> Welcome {user.email} </Text>
      <Button title={"Sign Out"} onPress={signOut()} />
    </View>
  );

  // return (
  //   <NavigationContainer>
  //     <StatusBar />
  //     <Drawer.Navigator
  //       initialRouteName={"Home"}
  //       drawerStyle={{
  //         backgroundColor: "#67ff4d",
  //       }}
  //       drawerContentOptions={{
  //         activeTintColor: "#8eff7a",
  //         itemStyle: {
  //           marginTop: 10,
  //           justifyContent: "center",
  //         },
  //         labelStyle: {
  //           fontSize: 25,
  //           color: "white",
  //         },
  //       }}
  //       screenOptions={({ navigation }) => ({
  //         headerShown: true,
  //         headerStyle: {
  //           backgroundColor: "#67ff4d",
  //         },
  //         headerLeft: () => <Menu navigation={navigation} />,
  //         headerTitle: () => <Nav navigation={navigation} />,
  //         headerRight: () => <Profile />,
  //       })}
  //       headerMode="float"
  //     >
  //       <Drawer.Screen name="Home" component={HomeStack} />
  //       <Drawer.Screen name="Video" component={Videos} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextInput: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: "black",
    flexDirection: "row",
    borderWidth: 2,
    width: "100%",
    height: 45,
  },
  signupButton: {
    marginTop: 10,
  },
});
