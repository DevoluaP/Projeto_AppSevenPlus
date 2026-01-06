import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../components/Footer";

import styles from "../assets/styles/style-downloads";

const downloadsMock = [
    {
        id: 1,
        title: "Stranger Things",
        image: require("../assets/images/posters/poster_17.png"),
    },
    {
        id: 2,
        title: "The Umbrella Academy",
        image: require("../assets/images/posters/poster_18.png"),
    },
    {
        id: 3,
        title: "Dark",
        image: require("../assets/images/posters/poster_12.png"),
    }
];

class DownloadsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Procurar"
                            placeholderTextColor="#999"
                        />
                        <FontAwesome
                            name="search"
                            size={20}
                            style={styles.searchIcon}
                        />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.body}>

                            {downloadsMock.map(item => (
                                <View key={item.id} style={styles.card}>

                                    <Image
                                        source={item.image}
                                        style={styles.poster}
                                    />

                                    <View style={styles.cardInfo}>
                                        <Text style={styles.title}>
                                            {item.title}
                                        </Text>

                                        <Text style={styles.status}>
                                            Baixado
                                        </Text>

                                        <TouchableOpacity style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Assistir
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            ))}

                        </View>
                    </ScrollView>

                    <Footer navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
}

export default DownloadsScreen;