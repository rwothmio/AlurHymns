import { StyleSheet } from "react-native";
import sv from "../../styleVariables"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"
    },
    icon: {
        fontSize: 26,
        color: sv.txt1
    },
    itemName: {
        color: sv.txt1
    },
    active: {
        color: sv.txt2
    }
})

export default styles