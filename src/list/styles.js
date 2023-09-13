import { StyleSheet } from "react-native";
import sv from "../styleVariables";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  id: {
    color: sv.txt1,
    width: 32,
    textAlign: "right",
    marginRight: 8
  },
  title: {
    color: sv.txt1,
    fontSize: 18,
    lineHeight: 22,
  }
});

export default styles;
