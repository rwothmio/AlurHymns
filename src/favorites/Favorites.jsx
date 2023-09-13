import { View, Text } from "react-native";
import React from "react";
import getHymnById from "../utility_functions/getHymnById";
import { connect } from "react-redux";
import List from "../list/List";
import styles from "./styles";

const Favorites = ({ favorites }) => {
  const favoriteHymns = favorites.map((favorite) => getHymnById(favorite));
  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>You no saved hymns</Text>
      ) : (
        <List hymns={favoriteHymns} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  currentHymnNumber: state.currentHymnNumber,
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
