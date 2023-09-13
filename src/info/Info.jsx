import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import InfoDetails from "./info_details/InfoDetails";
import Icon from "react-native-vector-icons/MaterialIcons"

const Info = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={[styles.container, showDetails && styles.details]}>
      {showDetails 
      ? (
        <InfoDetails setShowDetails={setShowDetails} />
      ) 
      : (
        <TouchableOpacity style={styles.infoIconContainer} onPress={() => setShowDetails(true)}>
          <Icon name="info" style={styles.infoIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Info;
