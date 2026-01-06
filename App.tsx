import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import DownloadsScreen from "./screens/DownloadsScreen";
import MenuScreen from "./screens/MenuScreen";
import SeriesScreen from "./screens/SeriesScreen";
import MoviesScreen from "./screens/MoviesScreen";
import MyListScreen from "./screens/MyListScreen";
import IndexScreen from "./screens/IndexScreen";
import LoginScreen from "./screens/LoginScreen";
import ChooseProfileScreen from "./screens/ChooseProfileScreen";
import PlanScreen from "./screens/PlanScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CreateProfileScreen from "./screens/CreateProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import EditingProfileScreen from "./screens/EditingProfileScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
    
        <Stack.Navigator initialRouteName="Index">
          
          <Stack.Screen name="Home" component={ HomeScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={ SearchScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Downloads" component={ DownloadsScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={ MenuScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Series" component={ SeriesScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Movies" component={ MoviesScreen } options={{ headerShown: false }} />
          <Stack.Screen name="MyList" component={ MyListScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Index" component={ IndexScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} />
          <Stack.Screen name="ChooseProfile" component={ ChooseProfileScreen } options={{ headerShown: false }} /> 
          <Stack.Screen name="Plan" component={ PlanScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={ RegisterScreen } options={{ headerShown: false }} />
          <Stack.Screen name="CreateProfile" component={ CreateProfileScreen } options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={ EditProfileScreen } options={{ headerShown: false }} />
          <Stack.Screen name="EditingProfile" component={ EditingProfileScreen } options={{ headerShown: false }} />
          <Stack.Screen name="RecoveryPassword" component={ RecoveryPasswordScreen } options={{ headerShown: false }} />
          <Stack.Screen name="NewPassword" component={ NewPasswordScreen } options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;