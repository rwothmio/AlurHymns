import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import mapDispatchToProps from "../../utility_functions/mapDispatchToProps";
import mapStateToProps from "../../utility_functions/mapStateToProps";
import getHymnById from "../../utility_functions/getHymnById";
import getFirstLine from "../../utility_functions/getFirstLine";

const Header = ({
  currentHymnNumber,
  favorites,
  addFavorite,
  removeFavorite,
}) => {
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(currentHymnNumber)
  );

  const handlePress = () => {
    isFavorite ? removeFavorite(currentHymnNumber) : addFavorite(currentHymnNumber)
    setTimeout(() => setDisplayFeedback(true), 500);
    setTimeout(() => setDisplayFeedback(false), 2000);
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(currentHymnNumber));
  }, [favorites]);

  const currentHymn = getHymnById(currentHymnNumber);
  return (
    <View style={styles.header}>
      <Text style={styles.id}>{currentHymn.id}</Text>

      <Text style={styles.title}>{getFirstLine(currentHymn.titles[0])}</Text>

      {displayFeedback && (
        <Text style={styles.feedback}>{isFavorite ? "added" : "removed"}</Text>
      )}

      {isFavorite ? (
        <Pressable onPress={handlePress}>
          <Icon style={styles.icon} name="favorite" />
        </Pressable>
      ) : (
        <Pressable onPress={handlePress}>
          <Icon style={styles.icon} name="favorite-border" />
        </Pressable>
      )}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
