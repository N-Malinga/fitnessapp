import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Login from "./login";
import Register from "./register";
// import Home from "./home"; // Create this file for the Home page

// Define the parameter types for each route
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: { username: string }; // Pass username to the Home page
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            title: `Welcome, ${route.params.username}`,
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
