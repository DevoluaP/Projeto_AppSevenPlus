import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  body: {
    alignItems: "center",
  },
  logo: {
    height: height * 0.2,
    marginLeft: 25,
    resizeMode: "contain",
  },
  title: {
    width: width * 0.8,
    color: "#FFF",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    padding: 20,
    marginBottom: 40,
  },
  button: {
    width: width * 0.8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#5BC2E7",
  },
  buttonText: {
    color: "#11111E",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    color: "#FFF",
  },
});

export default styles;
