import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-register";

class RegisterScreen extends Component {
    render() {
        return(
            <ScrollView>

                <ImageBackground
                    source={ require("../assets/images/background.png") }
                    style={ styles.background }
                >

                    <View style={ styles.container }>

                        <View style={ styles.header }>

                            <TouchableOpacity
                                style={ styles.back }
                                onPress={ () => this.props.navigation.navigate("Home") }
                            >
                                <Icon name="arrow-left" size={ 30 } color="#FFF" />
                            </TouchableOpacity>

                            <Image
                                source={ require("../assets/images/logo.png") }
                                style={ styles.logo }
                            />

                        </View>

                        <View style={ styles.body }>

                            <Text style={ styles.title }>Cadastre-se</Text>
                            <Text style={ styles.subtitle }>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, magni neque.
                            </Text>

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

                        </View>

                        <View style={ styles.footer }>

                            <TouchableOpacity style={ styles.button }>
                                <Text style={ styles.buttonText }>Criar Conta</Text>
                            </TouchableOpacity>

                            <Text style={ styles.footerText }>
                                © 2024 Seven Plus. Todos os direitos reservados.
                            </Text>

                        </View>

                    </View>

                </ImageBackground>

            </ScrollView>
        );
    }
}

export default RegisterScreen;