import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: "100%",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#11111E"
    },

    body: {
        width: width,
        height: "100%",
        paddingTop: 20,
        paddingBottom: 120,
        alignItems: "center",
        backgroundColor: "#000"
    },

    input: {
        width: width * 0.9,
        height: 60,
        color: "#FFF",
        padding: 12,
        paddingRight: "13%",
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#FFF",
        marginVertical: 20
    },

    searchIcon: {
        color: "#FFF",
        position: "absolute",
        marginTop: 40,
        marginLeft: width * 0.8
    },

    card: {
        width: width * 0.9,
        flexDirection: "row",
        backgroundColor: "#11111E",
        borderRadius: 12,
        marginBottom: 15,
        overflow: "hidden"
    },

    poster: {
        width: 110,
        height: 160
    },

    cardInfo: {
        flex: 1,
        padding: 12,
        justifyContent: "space-between"
    },

    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },

    status: {
        color: "#00FF99",
        fontSize: 14
    },

    button: {
        backgroundColor: "#5BC2E7",
        paddingVertical: 8,
        borderRadius: 6,
        alignItems: "center"
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "bold"
    }
});

export default styles;