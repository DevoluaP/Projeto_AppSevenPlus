import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../components/Footer";

import styles from "../assets/styles/style-search";

class SearchScreen extends Component {
    render() {
        return(
            <SafeAreaView>

                <View style={ styles.container }>

                    <View>

                        <TextInput
                            style={ styles.input }
                            placeholder="Buscar"
                            placeholderTextColor="#999"
                        />
                        <FontAwesome name="search" size={ 20 } style={ styles.searchIcon } />

                    </View>

                    <ScrollView>

                        <View style={ styles.body }>

                            <View></View>

                        </View>

                    </ScrollView>

                    <Footer navigation={ this.props.navigation } />

                </View>

            </SafeAreaView>
        );
    }
}

export default SearchScreen;