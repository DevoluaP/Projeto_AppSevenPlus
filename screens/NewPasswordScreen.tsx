import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-new-password";
import { ScrollView } from "react-native-gesture-handler";

class NewPasswordScreen extends Component {
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
                onPress={ () => this.props.navigation.navigate("RecoveryPassword") }
              >
                <Icon name="arrow-left" size={ 30 } color="#FFF" />
              </TouchableOpacity>
      
              <Image
                source={ require("../assets/images/logo.png") }
                style={ styles.logo }
              />
  
            </View>
      
            <View style={ styles.body }>
      
              <Text style={ styles.title }>Alterar senha</Text>
      
              <Text style={ styles.label }>E-mail</Text>
              <TextInput style={ styles.input } />
      
              <Text style={ styles.label }>Nova Senha</Text>
              <TextInput style={ styles.input } />
              
              <Text style={ styles.label }>Confirmar Nova Senha</Text>
              <TextInput style={ styles.input } />
      
              <TouchableOpacity
                  style={ styles.button }
                  onPress={ () => this.props.navigation.navigate("Login") }
              >
                <Text style={ styles.buttonText }>Pronto</Text>
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
    );
  }
}

export default NewPasswordScreen;