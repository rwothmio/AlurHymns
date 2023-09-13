import { StyleSheet } from "react-native";
import sv from "../styleVariables";

const styles = StyleSheet.create({
    container: {
        backgroundColor: sv.bg1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 20,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
})

export default styles