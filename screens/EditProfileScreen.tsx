import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "../assets/styles/style-edit-profile";

class EditProfileScreen extends Component {
  render() {
    return(
        <SafeAreaView>

        <ScrollView>

            <View style={ styles.container }>

                <View style={ styles.header }>

                <TouchableOpacity
                    style={ styles.back } 
                    onPress={ () => this.props.navigation.navigate("ChooseProfile") }
                >
                    <FontAwesome name="arrow-left" size={ 30 } color="#FFF" />
                </TouchableOpacity>

                    <Text style={ styles.title }>Editar perfis</Text>

                </View>

                <View style={ styles.body }>

                    <View style={ styles.profileContainer }>

                        <View>
                            <Image
                                source={ require("../assets/images/perfil1.png") }
                                style={ styles.profilePicture }
                            />
                        </View>
                        <Text style={ styles.profileName }>Perfil 1</Text>

                        <View style={ styles.iconsContainer }>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate("EditingProfile") }
                            >
                                <MaterialIcons name="edit" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => {/* Lógica para excluir o perfil */} }
                            >
                                <MaterialIcons name="delete" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={ styles.profileContainer }>

                        <View>
                            <Image
                                source={ require("../assets/images/perfil2.png") }
                                style={ styles.profilePicture }
                            />
                        </View>
                        <Text style={ styles.profileName }>Perfil 2</Text>

                        <View style={ styles.iconsContainer }>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate("EditingProfile") }
                            >
                                <MaterialIcons name="edit" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => {/* Lógica para excluir o perfil */} }
                            >
                                <MaterialIcons name="delete" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={ styles.profileContainer }>

                        <View>
                            <Image
                                source={ require("../assets/images/perfil3.png") }
                                style={ styles.profilePicture }
                            />
                        </View>
                        <Text style={ styles.profileName }>Perfil 3</Text>

                        <View style={ styles.iconsContainer }>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate("EditingProfile") }
                            >
                                <MaterialIcons name="edit" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => {/* Lógica para excluir o perfil */} }
                            >
                                <MaterialIcons name="delete" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={ styles.profileContainer }>

                        <View>
                            <Image
                                source={ require("../assets/images/perfil4.png") }
                                style={ styles.profilePicture }
                            />
                        </View>
                        <Text style={ styles.profileName }>Perfil 4</Text>

                        <View style={ styles.iconsContainer }>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate("EditingProfile") }
                            >
                                <MaterialIcons name="edit" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => {/* Lógica para excluir o perfil */} }
                            >
                                <MaterialIcons name="delete" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={ styles.profileContainer }>

                        <View>
                            <Image
                                source={ require("../assets/images/perfil5.png") }
                                style={ styles.profilePicture }
                            />
                        </View>
                        <Text style={ styles.profileName }>Perfil 5</Text>

                        <View style={ styles.iconsContainer }>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate("EditingProfile") }
                            >
                                <MaterialIcons name="edit" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => {/* Lógica para excluir o perfil */} }
                            >
                                <MaterialIcons name="delete" size={ 24 } color="#FFF" style={ styles.icon } />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <TouchableOpacity
                        style={ styles.profileContainer }
                        onPress={ () => this.props.navigation.navigate("CreateProfile") }
                    >

                        <MaterialIcons
                            name="add"
                            size={ 50 }
                            color="#FFF"
                            backgroundColor="#5BC2E7"
                            style={{ borderRadius: 50 }}
                        />

                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>

        </SafeAreaView>
    );
  }
}

export default EditProfileScreen;