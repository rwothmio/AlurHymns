const mapDispatchToProps = (dispatch) => {
  const changeCurrent = (id) =>
    dispatch({ type: "changeCurrent", payload: { hymnNumber: id } });

  const changeItem = (item) =>
    dispatch({ type: "changeItem", payload: { item: item } });

  const addFavorite = (hymnNumber) =>
    dispatch({ type: "add", payload: { hymnNumber } });

  const removeFavorite = (hymnNumber) =>
    dispatch({ type: "remove", payload: { hymnNumber } });

  return { changeCurrent, addFavorite, removeFavorite, changeItem };
};

export default mapDispatchToProps;
