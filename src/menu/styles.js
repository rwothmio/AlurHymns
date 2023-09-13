import { StyleSheet } from "react-native";
import sv from "../styleVariables";

const styles = StyleSheet.create({
  closeContainer: {
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    top: sv.s1,
    right: sv.s2
  },
  close: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  closeIcon: {
    fontWeight: "bold",
    color: sv.txt1,
    fontSize: sv.s2
  }
});

export default styles;
