import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#11111E",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
    marginBottom: width * 0.1,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    marginRight: -50,
  },
  body: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  profileContainer: {
    width: width * 0.4,
    margin: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 30,
    marginBottom: 10,
  },
  profileName: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
});

export default styles;
