import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#11111E"
    },

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
    },

    body: {
        width: width,
        height: "100%",
        backgroundColor: "#000"
    },

    carouselPrimary: {
        width: width,
        height: height / 4.2,
        marginBottom: 10
    },

    carouselItemPrimary: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    carouselImagePrimary: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 50
    },

    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 15
    },

    carouselSecondary: {
        width: width,
        height: height / 8,
    },

    carouselItemSecondary: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    carouselImageSecondary: {
        width: "90%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 20
    },

    footerText: {
        color: "#FFF"
    },

    footer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        paddingVertical: 10,
        backgroundColor: "#11111E"
    },
    
    footerMenu: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    
    iconContainer: {
        alignItems: "center"
    },
    
    iconText: {
        color: "#FFF",
        fontSize: 12,
        marginTop: 4
    } 
});

export default styles;