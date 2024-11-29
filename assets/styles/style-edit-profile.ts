import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "#11111E"
    },
    
    header: {
        alignItems: "center",
    },

    back: {
        alignItems: "flex-start",
        marginTop: 50,
        marginRight: width * 0.75
    },

    title: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 30
    },

    body: {
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10
    },

    profileContainer: {
        width: width * 0.4,
        margin: 10,
        alignItems: "center"
    },

    profilePicture: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: 30,
        marginBottom: 10
    },

    profileName: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 16
    },

    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5
    },
    
    icon: {
        marginHorizontal: 10
    }
});

export default styles;