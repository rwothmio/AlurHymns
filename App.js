import { StyleSheet, View } from "react-native";
import Footer from "./src/footer/Footer";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './src/store/index'
import HymnPage from "./src/hymn_page/HymnPage";
import Menu from "./src/menu/Menu";
import Info from "./src/info/Info";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeRouter>
          <View style={styles.container}>
            <Info />
            <Routes>
              <Route path="/" element={<HymnPage />}></Route>
              <Route path="/menu/:item" element={<Menu />}></Route>
            </Routes>
            <Footer />
          </View>
        </NativeRouter>
        </PersistGate>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
});

export default App