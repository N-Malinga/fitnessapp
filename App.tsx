import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/login";
import Register from "./app/register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
