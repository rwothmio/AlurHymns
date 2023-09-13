import { StyleSheet } from "react-native";
import sv from '../../styleVariables'

const styles = StyleSheet.create({
  container: {
    paddingTop: 72,
    paddingBottom: 62
  },
  verse: {
    color: sv.txt1,
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    paddingHorizontal: sv.s2,
    marginTop: 16,
    marginBottom: sv.s4,
  },
  chorus: {
    color: sv.txt1,
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    paddingHorizontal: sv.s2,
    marginBottom: sv.s4,
    fontStyle: "italic",
  },
});

export default styles;
