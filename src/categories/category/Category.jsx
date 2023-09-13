import { Pressable, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Category = ({ categoryName, index, setInView, isActive }) => {
  return (
    <Pressable style={styles.container} onPress={() => setInView(index)}>
      {index !== 0 && <Text style={styles.dot}>.</Text>}
      <Text style={[styles.category, isActive && styles.active]}>
        {categoryName}
      </Text>
    </Pressable>
  );
};

export default Category;
