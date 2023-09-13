import { View } from "react-native";
import React from "react";
import Header from './header/Header'
import Hymn from "./hymn/Hymn";
import styles from "./styles";

const HymnPage = () => {
  return (
    <View style={styles.container} >
      <Header />
      <Hymn />
    </View>
  );
};

export default HymnPage;
