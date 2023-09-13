import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InfoDetails = ({ setShowDetails }) => {
  return (
    <View style={styles.infoDetails}>
      <Text style={styles.infoMessage}>
        This app contains a collection of Christian hymns in Alur language.
        {"\n\n"}
        This version has total of 237 hymns in 8 different categories, and while
        the list might not be exhaustive, it includes most of the popular ones.
      </Text>
      <Text style={[styles.infoMessage, styles.Cta]}>
        Any feedback, contribution or donation is welcome.
      </Text>
      <Text style={styles.infoContactHeading}>Developer Contacts:</Text>
      <Text style={styles.infoContact}>brwothmio@gmail.com</Text>
      <Text style={styles.infoContact}>+256740088974 / +256770369480</Text>

      <TouchableOpacity
        onPress={() => setShowDetails(false)}
        style={styles.close}
      >
        <Icon name="close-circle-outline" style={styles.closeIcon} />
        <Text style={styles.closeText}>close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoDetails;
