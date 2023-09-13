import { StyleSheet } from "react-native";
import sv from "../styleVariables";
import rs from "../reuseStyles"

const styles = StyleSheet.create({
    container: rs.sectionPadding,
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: sv.txt2,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginTop: 8
    }
})

export default styles