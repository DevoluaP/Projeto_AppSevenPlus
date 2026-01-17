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
    backgroundColor: "#11111E",
  },
  header: {
    alignItems: "center",
  },
  back: {
    alignItems: "flex-start",
    marginTop: 30,
    marginRight: width * 0.75,
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 30,
  },
  body: {
    alignItems: "center",
  },
  imagePicker: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#FFF",
    backgroundColor: "#11111E",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
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
});

export default styles;
