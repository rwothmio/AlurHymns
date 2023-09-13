import { StyleSheet } from "react-native";
import sv from "../../styleVariables";

const styles = StyleSheet.create({
  infoDetails: {
    width: "100%",
    height: "100%",
    backgroundColor: sv.bg1,
    display: "flex",
    paddingHorizontal: sv.s3,
    paddingVertical: sv.s4,
  },
  infoMessage: {
    color: sv.txt1,
    fontSize: sv.s3,
    lineHeight: 26,
  },
  Cta: {
    marginTop: 22,
    marginBottom: 32,
  },
  infoContactHeading: {
    color: sv.txt1,
    fontSize: sv.s3,
    fontWeight: "bold",
    marginBottom: 6,
  },
  infoContact: {
    color: sv.txt1,
    fontSize: sv.s4,
    marginBottom: 14,
  },
  close: {
    alignSelf: "center",
    position: "absolute",
    bottom: 32,
    display: "flex",
    alignItems: "center",
  },
  closeIcon: {
    color: sv.txt2,
    fontSize: 48,
  },
  closeText: {
    color: sv.txt2,
    fontSize: sv.s3,
  },
});

export default styles;
