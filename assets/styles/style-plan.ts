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
        width: width ,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },

    periodButton: {
        width: "40%",
        alignItems: "center",
        padding: 5,
        borderColor: "#fff",
        borderBottomWidth: 5,
    },

    periodText: {
        color: "#FFF",
        fontSize: 16
    },

    planContainer: {

    },

    planTitle: {
        color: "#FFF",
    },

    planPrice: {
        color: "#FFF",
    },

    planBenefit: {
        color: "#FFF",
    },

    footer: {
        alignItems: "center",
        padding: 30
    },

    footerText: {
        color: "#FFF",
        marginBottom: 10
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