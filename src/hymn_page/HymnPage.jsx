import { View } from "react-native";
import React from "react";
import Header from './header/Header'
import Hymn from "./hymn/Hymn";

const HymnPage = () => {
  return (
    <View>
      <Header />
      <Hymn />
    </View>
  );
};

export default HymnPage;
