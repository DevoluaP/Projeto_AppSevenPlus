import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./style-footer";

class Footer extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.footer}>
          <View style={styles.footerMenu}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <MaterialIcons name="home" size={24} color="#FFF" />
              <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <MaterialIcons name="search" size={24} color="#FFF" />
              <Text style={styles.iconText}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.props.navigation.navigate("Downloads")}
            >
              <MaterialIcons name="download" size={24} color="#FFF" />
              <Text style={styles.iconText}>Downloads</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.props.navigation.navigate("Menu")}
            >
              <MaterialIcons name="menu" size={24} color="#FFF" />
              <Text style={styles.iconText}>Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Footer;
