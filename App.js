import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import Preloader from "./components/Preloader";
import Login from "./components/Login";

export default function App() {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPreloader(false);
      return () => {
        clearTimeout(timeout);
      };
    }, 3000);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.body}>
        {isPreloader ? <Preloader /> : <Login />}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // flexDirection: "row",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 30,
  },
});
