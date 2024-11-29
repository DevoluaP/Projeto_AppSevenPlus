import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    background: {
        width: width,
        height: "100%"
    },

    container: {
        width: width,
        height: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    
    header: {
        alignItems: "center"
    },

    back: {
        alignItems: "flex-start",
        marginTop: 50,
        marginRight: width * 0.75
    },

    title: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10
    },

    subtitle: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 16,
        paddingHorizontal: 25
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
        paddingVertical: 10,
        paddingHorizontal: 20,
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

    button: {
        width: width * 0.85,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "#5BC2E7"
    },

    buttonText: {
        color: "#11111E",
        fontSize: 18,
        textAlign: "center"
    },

    footer: {
        alignItems: "center",
        padding: 20
    },

    footerText: {
        color: "#FFF"
    }
});

export default styles;