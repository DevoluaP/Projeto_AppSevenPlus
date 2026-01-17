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
    paddingVertical: 20,
  },
  carouselPrimary: {
    width: width,
    height: height / 4.2,
    marginBottom: 10,
  },
  carouselItemPrimary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImagePrimary: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 50,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  carouselSecondary: {
    width: width,
    height: height / 8,
  },
  carouselItemSecondary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImageSecondary: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
  },
});

export default styles;
