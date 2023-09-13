const mapStateToProps = (state) => ({
  currentHymnNumber: state.currentHymnNumber,
  currentItem: state.currentItem,
  favorites: state.favorites,
});

export default mapStateToProps;
