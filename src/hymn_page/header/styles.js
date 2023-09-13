import { StyleSheet } from "react-native";
import sv from "../../styleVariables";
import rs from "../../reuseStyles"

const styles = StyleSheet.create({
    
  header: {
    height: 64,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    zIndex: 2
  },
  title: rs.title,
  id: {
    fontStyle: "italic",
    color: sv.txt1,
  }, 
  icon: {
    color: sv.txt2,
    fontSize: 16
  },
  feedback: {
    color: sv.txt1,
    position: "absolute",
    right: sv.s2,
    top: sv.s1
  }
})

export default styles