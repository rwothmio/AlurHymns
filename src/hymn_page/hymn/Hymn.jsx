import React from "react";
import styles from "./styles";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import getHymnById from "../../utility_functions/getHymnById";
import mapDispatchToProps from "../../utility_functions/mapDispatchToProps";
import mapStateToProps from "../../utility_functions/mapStateToProps";

function Hymn({ currentHymnNumber }) {
  const currentHymn = getHymnById(currentHymnNumber);

  return (
    <View style={styles.container}>
      <FlatList
        data={currentHymn.body}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.verse}>{item[0]}</Text>
            {item[1] && <Text style={styles.chorus}>{item[1]}</Text>}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Hymn);
