import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "../assets/styles/style-choose-profile";

class ChooseProfileScreen extends Component {
  render() {
    return(
        <ScrollView>

            <View style={ styles.container }>

                <View style={ styles.header }>

                    <Text style={ styles.title }>Quem está assistindo?</Text>

                    <TouchableOpacity onPress={ () => this.props.navigation.navigate("EditProfile") }>
                        <Text style={ styles.text }>Editar</Text>
                    </TouchableOpacity>

                </View>

                <View style={ styles.body }>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("Index") }
                    >

                        <Image
                            source={ require("../assets/images/perfil1.png") }
                            style={ styles.profilePicture }
                        />
                        <Text style={ styles.profileName }>Perfil 1</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("Index") }
                    >

                        <Image
                            source={ require("../assets/images/perfil2.png") }
                            style={ styles.profilePicture }
                        />
                        <Text style={ styles.profileName }>Perfil 2</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("Index") }
                    >

                        <Image
                            source={ require("../assets/images/perfil3.png") }
                            style={ styles.profilePicture }
                        />
                        <Text style={ styles.profileName }>Perfil 3</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("Index") }
                    >

                        <Image
                            source={ require("../assets/images/perfil4.png") }
                            style={ styles.profilePicture }
                        />
                        <Text style={ styles.profileName }>Perfil 4</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("Index") }
                    >

                        <Image
                            source={ require("../assets/images/perfil5.png") }
                            style={ styles.profilePicture }
                        />
                        <Text style={ styles.profileName }>Perfil 5</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    );
  }
}

export default ChooseProfileScreen;