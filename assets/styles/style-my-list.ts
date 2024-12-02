import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#11111E"
    },

    body: {
        width: width,
        height: "100%",
        backgroundColor: "#000"
    },

    title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 14,
        marginLeft: 15
    },

    list: {
        width: width * 0.68,
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    listItem: {
        width: width * 0.6,
        height: 150,
        resizeMode: "contain",
        borderRadius: 20
    }
});

export default styles;