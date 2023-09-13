import { StyleSheet } from "react-native";
import sv from "../styleVariables"
import rs from "../reuseStyles"

const styles = StyleSheet.create({
    categories: {
        ...rs.sectionPadding,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

export default styles