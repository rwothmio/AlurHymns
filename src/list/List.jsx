import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { connect } from "react-redux";
import mapDispatchToProps from "../utility_functions/mapDispatchToProps";
import { useNavigate } from "react-router-native";
import getFirstLine from "../utility_functions/getFirstLine";

const List = ({ hymns, changeCurrent, changeItem }) => {
  const navigate = useNavigate();

  const handleNewHymn = (hymnNumber) => {
    changeCurrent(hymnNumber);
    changeItem("lyrics");
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={hymns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleNewHymn(item.id)}>
            <View style={styles.listItem}>
              <Text style={styles.id}>{item.id}.</Text>
              <Text style={styles.title}>
                {getFirstLine(item.titles[0])}
              </Text>
            </View>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default connect(null, mapDispatchToProps)(List);
