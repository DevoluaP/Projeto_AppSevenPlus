import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-plan";
import { ScrollView } from "react-native-gesture-handler";

class PlanScreen extends Component {
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

                            <Text style={ styles.title }>Escolha seu Plano</Text>

                            <Text style={ styles.subtitle }>
                                Assista sucessos de bilheteria, produções originais inéditas e favoritos da família.
                            </Text>

                        </View>

                        <View style={ styles.body }>

                            <View style={ styles.periodContainer }>

                                <TouchableOpacity style={ styles.periodButton }>
                                    <Text style={ styles.periodText }>Mensal</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={ styles.periodButton }>
                                    <Text style={ styles.periodText }>Anual</Text>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity style={ styles.planContainer }>

                                <Text style={ styles.planTitle }>Básico</Text>
                                <Text style={ styles.planPrice }>R$ 30,00</Text>
                                <Text style={ styles.planBenefit }>• 2 dispositivos ao mesmo tempo</Text>
                                <Text style={ styles.planBenefit }>• Resolução Full HD</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.planContainer }>

                                <Text style={ styles.planTitle }>Padrão</Text>
                                <Text style={ styles.planPrice }>R$ 40,00</Text>
                                <Text style={ styles.planBenefit }>• 2 dispositivos ao mesmo tempo</Text>
                                <Text style={ styles.planBenefit }>• Resolução Full HD</Text>
                                <Text style={ styles.planBenefit }>• 30 downloads para curtir off-line</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.planContainer }>

                                <Text style={ styles.planTitle }>Família</Text>
                                <Text style={ styles.planPrice }>R$ 60,00</Text>
                                <Text style={ styles.planBenefit }>• 4 dispositivos ao mesmo tempo</Text>
                                <Text style={ styles.planBenefit }>• Resolução Full HD e 4K Ultra HD</Text>
                                <Text style={ styles.planBenefit }>• Audio Dolby Atmos</Text>
                                <Text style={ styles.planBenefit }>• 100 downloads para curtir off-line</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={ styles.footer }>

                            <Text style={ styles.footerText }>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, magni neque. Itaque officia possimus velit quaerat ipsam repudiandae aliquid earum consequuntur odio ipsum laborum corrupti, officiis, provident repellendus quis minima.
                            </Text>

                            <TouchableOpacity style={ styles.button }>
                                <Text style={ styles.buttonText }>Continuar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>

            </ScrollView>
        );
    }
}

export default PlanScreen;