// npm install react-native-gesture-handler react-native-reanimated
// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-screens react-native-safe-area-context

import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PlanScreen from "./screens/PlanScreen";
// import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Login" component={ LoginScreen } />
          <Stack.Screen name="Plan" component={ PlanScreen } />
          {/* <Stack.Screen name="Register" component={ RegisterScreen } /> */}

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;