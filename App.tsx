import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

import styles from "./assets/styles/style";

class App extends Component {
  render() {
    return(
      <ImageBackground
        source={ require("./assets/images/background.png") }
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      >

        <View style={ styles.container }>

          <View style={ styles.header }>

              <Image
                  source={ require("./assets/images/logo.png") }
                  style={ styles.logo }
              />    

          </View>

          <View style={ styles.body }>

            <Text style={ styles.title }>Login</Text>
            <TextInput style={ styles.input } placeholder="E-mail" />
            <TextInput style={ styles.input } placeholder="Senha" />

            <TouchableOpacity style={ styles.button }>

              <Text style={ styles.buttonText }>Entrar</Text>

            </TouchableOpacity>

            <Text style={ styles.text }>Esqueceu a senha?</Text>

          </View>

          <View style={ styles.footer }>

            <Text style={ styles.footerText }>© 2024 Seven Plus e suas empresas afiliadas. Todos os direitos reservados.</Text>

          </View>

          <Image
              source={ require("./assets/images/background.png") }
              style={ styles.background }
          />

        </View>

      </ImageBackground>
    );
  }
}

export default App;