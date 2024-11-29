import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-recovery-password";

class RecoveryPasswordScreen extends Component {
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
              onPress={ () => this.props.navigation.navigate("Login") }
            >
              <Icon name="arrow-left" size={ 30 } color="#FFF" />
            </TouchableOpacity>

            <Image
              source={ require("../assets/images/logo.png") }
              style={ styles.logo }
            />

          </View>

          <View style={ styles.body }>

            <Text style={ styles.title }>Recuperar senha</Text>

            <Text style={ styles.text }>
                Informe o e-mail utilizado no cadastro. Um link para recuperar sua senha será enviado para ele.
            </Text>

            <Text style={ styles.label }>E-mail</Text>
            <TextInput style={ styles.input } />

            <TouchableOpacity
                style={ styles.button }
                onPress={ () => this.props.navigation.navigate("NewPassword") }
            >
              <Text style={ styles.buttonText }>Enviar</Text>
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

export default RecoveryPasswordScreen;