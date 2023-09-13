import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import hymns from "../hymnsData";
import List from "../list/List";
import Category from "./category/Category";

const categoryNames = [
  "Pak Yung Foc",
  "Kwac",
  "Both",
  "Woth ku tic",
  "Polo",
  "Nyol pa Yesu",
  "Tho ku cer",
  "Dwogo pa Yesu",
];
const hymnsInCategories = [
  hymns.slice(0, 48),
  hymns.slice(48, 98),
  hymns.slice(98, 134),
  hymns.slice(134, 191),
  [...hymns.slice(191, 209), hymns[236]],
  [...hymns.slice(209, 220), hymns[237]],
  hymns.slice(220, 229),
  hymns.slice(229, 236),
];

const Categories = () => {
  const [inView, setInView] = useState(0);

  return (
    <View style={styles.categories}>
      {categoryNames.map((categoryName, index) => (
        <Category
          key={categoryName}
          categoryName={categoryName}
          index={index}
          setInView={setInView}
          isActive={inView === index}
        />
      ))}
      <List hymns={hymnsInCategories[inView]} />
    </View>
  );
};

export default Categories;
