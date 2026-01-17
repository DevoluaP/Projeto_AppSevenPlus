import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width: width,
    height: "100%",
  },
  container: {
    width: width,
    height: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  header: {
    alignItems: "center",
  },
  back: {
    alignItems: "flex-start",
    marginTop: 30,
    marginRight: width * 0.75,
  },
  body: {
    alignItems: "center",
  },
  title: {
    width: width * 0.8,
    textAlign: "center",
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    width: width * 0.8,
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: "#FFF",
    marginBottom: 20,
  },
  label: {
    width: width * 0.8,
    color: "#FFF",
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    width: width * 0.8,
    height: 50,
    color: "#FFF",
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#11111E",
  },
  button: {
    width: width * 0.8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
    paddingVertical: 30,
  },
  footerText: {
    color: "#FFF",
  },
});

export default styles;
