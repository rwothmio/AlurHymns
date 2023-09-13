import { View } from "react-native";
import React from "react";
import styles from "./styles";
import Item from "./item/Item";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Item iconName={"playlist-music"} itemName={"lyrics"} />
      <Item iconName={"shape"} itemName={"categories"} />
      <Item iconName={"magnify"} itemName={"search"} />
      <Item iconName={"heart-settings"} itemName={"favorites"} />
    </View>
  );
};

export default Footer;
