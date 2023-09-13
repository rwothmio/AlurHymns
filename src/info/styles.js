import { StyleSheet } from "react-native";
import sv from "../styleVariables";

const styles = StyleSheet.create({
  container: {
    backgroundColor: sv.bg1,
    width: "100%",
    position: "absolute",
    left: 0,
    zIndex: 3,
  },
  infoIcon: {
    color: sv.txt1,
    fontSize: 18,
  },
  infoIconContainer: {
    position: "absolute",
    left: sv.s2,
    top: 28,
  },
  details: {
    height: "100%",
    bottom: 0,
  },
});

export default styles;
