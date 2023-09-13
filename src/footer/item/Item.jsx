import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigate } from "react-router-native";
import mapStateToProps from "../../utility_functions/mapStateToProps";
import mapDispatchToProps from "../../utility_functions/mapDispatchToProps";
import { connect } from "react-redux";

const Item = ({ iconName, itemName, currentItem, changeItem }) => {
  const navigate = useNavigate();

  const handleItemsChange = () => {
    changeItem(itemName);
    const to = itemName === "lyrics" ? "/" : `/menu/${itemName}`;
    navigate(to);
  };

  return (
    <TouchableOpacity onPress={() => handleItemsChange(itemName)}>
      <View style={styles.container}>
      <Icon
        name={iconName}
        style={[styles.icon, currentItem === itemName && styles.active]}
      />
      <Text style={[styles.itemName, currentItem === itemName && styles.active]}>{itemName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
