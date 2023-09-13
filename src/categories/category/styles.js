import { StyleSheet } from "react-native";
import sv from "../../styleVariables";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  category: {
    fontSize: sv.s3,
    color: sv.txt1,
    // marginRight: sv.s1,
  },
  active: {
    color: sv.txt2,
  },
  dot: {
    color: sv.txt2,
    fontSize: 32,
    position: "relative",
    bottom: 8,
    marginHorizontal: 4
  }
});

export default styles;
