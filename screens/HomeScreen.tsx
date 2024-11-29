import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../assets/styles/style-home";

class HomeScreen extends Component {
  render() {
    return(
        <SafeAreaView>

            <ImageBackground
                source={ require("../assets/images/background.png") }
                style={ styles.background }
            >

                <View style={ styles.container }>

                    <View style={ styles.body }>

                        <Image
                            source={ require("../assets/images/logo.png") }
                            style={ styles.logo }
                        />

                        <Text style={ styles.title }>Comece a assistir agora</Text>

                        <Text style={ styles.text }>
                            Prepare-se para mergulhar nos melhores filmes, séries e muito mais!
                        </Text>

                        <TouchableOpacity
                            style={ styles.button }
                            onPress={ () => this.props.navigation.navigate("Plan") }
                        >
                            <Text style={ styles.buttonText }>Assinar agora</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={ styles.button }
                            onPress={ () => this.props.navigation.navigate("Login") }
                        >
                            <Text style={ styles.buttonText }>Entrar</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={ styles.footer }>

                        <Text style={ styles.footerText }>
                            © 2024 Seven Plus. Todos os direitos reservados.
                        </Text>

                    </View>

                </View>

            </ImageBackground>
            
        </SafeAreaView>
    );
  }
}

export default HomeScreen;