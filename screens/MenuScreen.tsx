import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import Footer from "../components/Footer";

import styles from "../assets/styles/style-menu";

class MenuScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.body}>

                            <Text style={styles.title}>Configurações</Text>

                            <TouchableOpacity style={styles.item}>
                                <FontAwesome name="user" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Conta</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item}>
                                <MaterialIcons name="lock" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Privacidade</Text>
                            </TouchableOpacity>

                            <Text style={styles.section}>Aplicativo</Text>
                            
                            <TouchableOpacity style={styles.item}>
                                <Ionicons name="notifications-outline" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Notificações</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.item}>
                                <Ionicons name="download-outline" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Armazenamento e Dados</Text>
                            </TouchableOpacity>

                            <Text style={styles.section}>Suporte</Text>

                            <TouchableOpacity style={styles.item}>
                                <Ionicons name="help-circle-outline" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Ajuda</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item}>
                                <Ionicons name="information-circle-outline" size={22} color="#FFF" />
                                <Text style={styles.itemText}>Sobre</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.logout}>
                                <Text style={styles.logoutText}>Sair</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                    <Footer navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
}

export default MenuScreen;