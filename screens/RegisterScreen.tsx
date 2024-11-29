import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-register";

class RegisterScreen extends Component {
    render() {
        return(
            <SafeAreaView>

                <ScrollView>
            
                    <ImageBackground
                        source={ require("../assets/images/background.png") }
                        style={ styles.background }
                    >
                    
                        <View style={ styles.container }>
            
                            <View style={ styles.header }>
            
                                <TouchableOpacity
                                    style={ styles.back }
                                    onPress={ () => this.props.navigation.navigate("Plan") }
                                >
                                    <FontAwesome name="arrow-left" size={ 30 } color="#FFF" />
                                </TouchableOpacity>
            
                            </View>
            
                            <View style={ styles.body }>
            
                                <Text style={ styles.title }>Crie sua conta</Text>
                                
                                <Text style={ styles.subtitle }>
                                    Você usará isso para assistir em seus dispositivos favoritos.
                                </Text>
            
                                <Text style={ styles.text }>* Indica um campo obrigatório</Text>
            
                                <Text style={ styles.label }>E-mail *</Text>
                                <TextInput style={ styles.input } />
            
                                <Text style={ styles.label }>Confirmação de E-mail *</Text>
                                <TextInput style={ styles.input } />
            
                                <Text style={ styles.label }>Senha *</Text>
                                <TextInput style={ styles.input } />
                                
                                <Text style={ styles.label }>Nome *</Text>
                                <TextInput style={ styles.input } />
                                
                                <Text style={ styles.label }>Sobrenome *</Text>
                                <TextInput style={ styles.input } />
            
                                <TouchableOpacity
                                    style={ styles.button }
                                    onPress={ () => this.props.navigation.navigate("CreateProfile") }
                                >
                                    <Text style={ styles.buttonText }>Criar Conta</Text>
                                </TouchableOpacity>
            
                            </View>
            
                            <View style={ styles.footer }>
            
                                <Text style={ styles.footerText }>
                                    © 2024 Seven Plus. Todos os direitos reservados.
                                </Text>
            
                            </View>
            
                        </View>
            
                    </ImageBackground>
            
                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default RegisterScreen;