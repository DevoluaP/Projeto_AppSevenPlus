import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
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
    backgroundColor: "#000",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  label: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  carousel: {
    width: width,
    height: height / 8,
  },
  carouselItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImage: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
  },
});

export default styles;
