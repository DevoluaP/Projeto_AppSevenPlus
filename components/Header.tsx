import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./style-header";

class Header extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />

          <View style={styles.navbar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Series")}
            >
              <Text style={styles.headerText}>Séries</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Movies")}
            >
              <Text style={styles.headerText}>Filmes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MyList")}
            >
              <Text style={styles.headerText}>Minha Lista</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;
