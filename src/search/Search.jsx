import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import hymns from "../hymnsData";
import List from "../list/List";
import sv from "../styleVariables";
import styles from "./styles";
import _lower from "lodash/lowerCase"

const Search = () => {
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const newMatches = [];

    for (let i = 0; i < hymns.length; i++) {
      const _query = _lower(query)
      const _alurTitle = _lower(hymns[i].titles[0])
      const _foreignTitle = _lower(hymns[i].titles[1])

      const isInAlurTitle = _alurTitle.includes(_query);
      const isInForeignTitle = _foreignTitle.includes(_query);
      const isInId = hymns[i].id.includes(query.toString());

      if (isInAlurTitle || isInForeignTitle || isInId)
        newMatches.push(hymns[i]);
    }
    setMatches(newMatches);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter name or number"
        onChangeText={(q) => setQuery(q)}
        defaultValue=""
        selectionColor={sv.bg1}
        cursorColor={sv.txt1}
        autoFocus={true}
        style={styles.input}
      />
      <List hymns={matches} />
    </View>
  );
};

export default Search;
