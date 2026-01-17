import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11111E",
  },
  body: {
    width: width,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#000",
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
    marginVertical: 20,
  },
  searchIcon: {
    color: "#FFF",
    position: "absolute",
    marginTop: 40,
    marginLeft: width * 0.8,
  },
});

export default styles;
