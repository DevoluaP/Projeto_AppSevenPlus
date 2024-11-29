import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-plan";

class PlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPeriod: "Mensal",
            selectedPlan: null
        }
    }
    
    handlePeriodChange = (period) => {
        this.setState({ selectedPeriod: period, selectedPlan: null });
    }

    handlePlanSelect = (plan) => {
        this.setState({ selectedPlan: plan });
    }

    render() {
        const { selectedPeriod, selectedPlan } = this.state;

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
                                <FontAwesome name="arrow-left" size={ 30 } color="#FFF" />
                            </TouchableOpacity>

                            <Text style={ styles.title }>Escolha seu Plano</Text>

                            <Text style={ styles.subtitle }>
                                Assista sucessos de bilheteria, produções originais inéditas e favoritos da família.
                            </Text>

                        </View>

                        <View style={ styles.body }>

                            <View style={ styles.periodContainer }>

                                <TouchableOpacity
                                    style={[
                                        styles.periodButton,
                                        selectedPeriod === "Mensal" ? styles.selectedButton : styles.unselectedButton,
                                    ]}
                                    onPress={ () => this.handlePeriodChange("Mensal") }
                                >
                                    <Text style={ styles.periodText }>Mensal</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.periodButton,
                                        selectedPeriod === "Anual" ? styles.selectedButton : styles.unselectedButton,
                                    ]}
                                    onPress={ () => this.handlePeriodChange("Anual") }
                                >
                                    <Text style={ styles.periodText }>Anual</Text>
                                </TouchableOpacity>

                            </View>

                            {selectedPeriod === "Mensal" && (
                                <>
                                    {["Básico", "Padrão", "Família"].map((plan, index) => (

                                        <TouchableOpacity
                                            key={ index }
                                            style={[
                                                styles.planContainer,
                                                selectedPlan === plan ? styles.selectedPlan : styles.unselectedPlan,
                                            ]}
                                            onPress={ () => this.handlePlanSelect(plan) }
                                        >

                                            <Text style={ styles.planTitle }>{ plan }</Text>
                                            
                                            <Text style={ styles.planPrice }>
                                                {
                                                    plan === "Básico" ? "R$ 30,00 /mês" :
                                                    plan === "Padrão" ? "R$ 40,00 /mês" : "R$ 60,00 /mês"
                                                }
                                            </Text>

                                            {[
                                                plan === "Básico"  ? "• 2 dispositivos ao mesmo tempo"      : null,
                                                plan === "Básico"  ? "• Resolução Full HD"                  : null,
                                                plan === "Padrão"  ? "• 2 dispositivos ao mesmo tempo"      : null,
                                                plan === "Padrão"  ? "• Resolução Full HD"                  : null,
                                                plan === "Padrão"  ? "• 30 downloads para curtir off-line"  : null,
                                                plan === "Família" ? "• 4 dispositivos ao mesmo tempo"      : null,
                                                plan === "Família" ? "• Resolução Full HD e 4K Ultra HD"    : null,
                                                plan === "Família" ? "• Audio Dolby Atmos"                  : null,
                                                plan === "Família" ? "• 100 downloads para curtir off-line" : null,
                                            ].filter(Boolean).map((benefit, index) => (
                                                <Text key={ index } style={ styles.planBenefit }>{ benefit }</Text>
                                            ))}

                                        </TouchableOpacity>

                                    ))}
                                </>
                            )}

                            {selectedPeriod === "Anual" && (
                                <>
                                    {["Básico", "Padrão", "Família"].map((plan, index) => (

                                        <TouchableOpacity
                                            key={ index }
                                            style={[
                                                styles.planContainer,
                                                selectedPlan === plan ? styles.selectedPlan : styles.unselectedPlan,
                                            ]}
                                            onPress={ () => this.handlePlanSelect(plan) }
                                        >

                                            <Text style={ styles.planTitle }>{ plan }</Text>
                                            
                                            <Text style={ styles.planPrice }>
                                                {
                                                    plan === "Básico" ? "R$ 225,00 /ano" :
                                                    plan === "Padrão" ? "R$ 360,00 /ano" : "R$ 480,00 /ano"
                                                }
                                            </Text>
                                            
                                            {[
                                                plan === "Básico"  ? "• 2 dispositivos ao mesmo tempo"      : null,
                                                plan === "Básico"  ? "• Resolução Full HD"                  : null,
                                                plan === "Padrão"  ? "• 2 dispositivos ao mesmo tempo"      : null,
                                                plan === "Padrão"  ? "• Resolução Full HD"                  : null,
                                                plan === "Padrão"  ? "• 30 downloads para curtir off-line"  : null,
                                                plan === "Família" ? "• 4 dispositivos ao mesmo tempo"      : null,
                                                plan === "Família" ? "• Resolução Full HD e 4K Ultra HD"    : null,
                                                plan === "Família" ? "• Audio Dolby Atmos"                  : null,
                                                plan === "Família" ? "• 100 downloads para curtir off-line" : null,
                                            ].filter(Boolean).map((benefit, index) => (
                                                <Text key={ index } style={ styles.planBenefit }>{ benefit }</Text>
                                            ))}

                                        </TouchableOpacity>

                                    ))}
                                </>
                            )}

                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    !selectedPlan && styles.buttonDisabled
                                ]}
                                onPress={() => {
                                    if (selectedPlan) {
                                        this.props.navigation.navigate("Register")
                                    }
                                }}
                                disabled={ !selectedPlan }
                            >
                                <Text style={ styles.buttonText }>Continuar</Text>
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

export default PlanScreen;