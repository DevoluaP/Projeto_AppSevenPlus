import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-login";

class LoginScreen extends Component {
  render() {
    return(
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
              <FontAwesome name="arrow-left" size={ 30 } color="#FFF" />
            </TouchableOpacity>

            <Image
              source={ require("../assets/images/logo.png") }
              style={ styles.logo }
            />

          </View>

          <View style={ styles.body }>

            <Text style={ styles.title }>Login</Text>

            <Text style={ styles.label }>E-mail</Text>
            <TextInput style={ styles.input } />

            <Text style={ styles.label }>Senha</Text>
            <TextInput style={ styles.input } />

            <TouchableOpacity
              style={ styles.button }
              onPress={ () => this.props.navigation.navigate("ChooseProfile") }
            >
              <Text style={ styles.buttonText }>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ () => this.props.navigation.navigate("RecoveryPassword") }
            >
              <Text style={ styles.text }>Esqueceu a senha?</Text>
            </TouchableOpacity>

          </View>

          <View style={ styles.footer }>

            <Text style={ styles.footerText }>
              © 2024 Seven Plus. Todos os direitos reservados.
            </Text>

          </View>

        </View>

      </ImageBackground>
    );
  }
}

export default LoginScreen;