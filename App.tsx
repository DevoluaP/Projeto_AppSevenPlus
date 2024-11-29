import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseProfileScreen from "./screens/ChooseProfileScreen";
import IndexScreen from "./screens/IndexScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PlanScreen from "./screens/PlanScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CreateProfileScreen from "./screens/CreateProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="ChooseProfile" component={ ChooseProfileScreen } />
          <Stack.Screen name="Index" component={ IndexScreen } />
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Login" component={ LoginScreen } />
          <Stack.Screen name="Plan" component={ PlanScreen } />
          <Stack.Screen name="Register" component={ RegisterScreen } />
          <Stack.Screen name="CreateProfile" component={ CreateProfileScreen } />
          <Stack.Screen name="EditProfile" component={ EditProfileScreen } />
          <Stack.Screen name="NewPassword" component={ NewPasswordScreen } />
          <Stack.Screen name="RecoveryPassword" component={ RecoveryPasswordScreen } />

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;