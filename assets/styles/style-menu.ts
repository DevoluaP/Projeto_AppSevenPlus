import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000"
    },

    body: {
        width: width * 0.9,
        paddingTop: 30,
        paddingBottom: 120
    },

    title: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 25
    },

    section: {
        color: "#888",
        fontSize: 14,
        marginTop: 25,
        marginBottom: 10
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#11111E",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12
    },

    itemText: {
        color: "#FFF",
        fontSize: 18,
        marginLeft: 15
    },

    logout: {
        marginTop: 30,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E50914",
        alignItems: "center"
    },

    logoutText: {
        color: "#E50914",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles;