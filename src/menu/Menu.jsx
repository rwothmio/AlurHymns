import { Pressable, View } from "react-native";
import React from "react";
import styles from "./styles";
import Search from "../search/Search";
import List from "../list/List";
import Categories from "../categories/Categories";
import Favorites from "../favorites/Favorites";
import { useNavigate, useParams } from "react-router-native";
import hymns from "../hymnsData";

const Item = (item) => {
  switch (item) {
    case "list":
      return <List hymns={hymns} />;
    case "search":
      return <Search />;
    case "favorites":
      return <Favorites />;
    case "categories":
      return <Categories />;
  }
};

const Menu = () => {
  const { item } = useParams();
  const navigate = useNavigate();
  return (
    <View style={styles.container}>

      {/* <View style={styles.closeContainer}>

        <Pressable style={styles.close} onPress={() => navigate("/")}>
          
          <Icon style={styles.closeIcon} name="cancel" />

        </Pressable>

      </View> */}

      {Item(item)}
    </View>
  );
};

export default Menu;
