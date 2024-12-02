import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../assets/styles/style-my-list";

class MyListScreen extends Component {
  render() {
    return(
        <SafeAreaView>

            <View style={ styles.container }>

                <Header navigation={ this.props.navigation } />

                <ScrollView>

                    <View style={ styles.body }>

                        <Text style={ styles.title }>Minha Lista</Text>

                        <View style={ styles.list }>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_05.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_06.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_07.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_08.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_09.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_10.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_11.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_12.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_13.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={ require("../assets/images/posters/poster_14.png") }
                                    style={ styles.listItem }
                                />
                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>

                <Footer navigation={ this.props.navigation } />

            </View>

        </SafeAreaView>
    );
  }
}

export default MyListScreen;