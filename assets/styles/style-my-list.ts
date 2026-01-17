import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11111E",
  },
  body: {
    width: "100%",
    backgroundColor: "#000",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 14,
    marginLeft: 30,
  },
  list: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
  },
  listItem: {
    width: "90%",
    aspectRatio: 16 / 9,
    resizeMode: "contain",
    borderRadius: 16,
    marginBottom: 16,
  },
});

export default styles;
