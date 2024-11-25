import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    ScrollView: {
        paddingBottom: 20
    },

    container: {
        
    },
    
    header: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },

    logo: {
        width: "40%",
        height: 150,
        resizeMode: "contain"
    },

    body: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10
    },

    input: {
        width: width * 0.8,
        height: 50,
        fontSize: 16,
        marginBottom: 20,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
    },

    button: {
        width: width * 0.8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#000",
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center"
    },

    text: {
        color: "#00f",
        fontSize: 15,
        marginTop: 20
    },

    footer: {
        height: "21%",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 10
    },

    footerText: {

    },

    background: {
        width: width,
        opacity: 0.8
    }
});

export default styles;