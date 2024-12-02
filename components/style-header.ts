import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    header: {
        width: width,
        height: height * 0.14,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    logo: {
        width: "25%",
        resizeMode: "contain",
        marginBottom: -20
    },

    navbar: {
        width: "75%",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },

    headerText: {
        color: "#FFF",
        fontSize: 16
    }
});

export default styles;