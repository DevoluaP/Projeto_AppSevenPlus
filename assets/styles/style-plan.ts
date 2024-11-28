import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height
    },

    container: {
        width: width,
        height: height,
        justifyContent: "space-evenly",
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    
    header: {
        alignItems: "center"
    },

    back: {
        alignItems: "flex-start",
        marginRight: width * 0.75,
    },

    title: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },

    subtitle: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 16,
        paddingLeft: 25,
        paddingRight: 25
    },

    body: {
        alignItems: "center"
    },

    periodContainer: {
        width: width,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginTop: 20
    },

    periodButton: {
        width: "40%",
        alignItems: "center",
        padding: 5,
        borderColor: "#fff",
        borderBottomWidth: 5,
    },

    selectedButton: {
      borderColor: "#FFF",
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    },

    unselectedButton: {
      borderColor: "#11111E"
    },

    periodText: {
        color: "#FFF",
        fontSize: 16
    },

    planContainer: {
        width: width * 0.85,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: "#11111E",
    },

    planTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    },

    planPrice: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },

    planBenefit: {
        width: "100%",
        color: "#FFF",
        alignItems: "flex-start",
        marginBottom: 5
    },

    selectedPlan: {
        borderColor: "#FFF",
        borderWidth: 5,
        borderRadius: 10
    },

    unselectedPlan: {
        borderWidth: 0
    },

    buttonDisabled: {
        backgroundColor: "#AAA"
    },

    footer: {
        alignItems: "center",
        padding: 30
    },

    button: {
        width: width * 0.85,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#5BC2E7"
    },

    buttonText: {
        color: "#11111E",
        fontSize: 18,
        textAlign: "center"
    }
});

export default styles;