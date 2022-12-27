import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import SignupScreen from './Screens/SignupScreen';
import * as SecureStore from "expo-secure-store";


const Stack = createStackNavigator();

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    alert("No values stored under that key.");
  }
}

export default function App() {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplashScreen(false);
      return () => {
        clearTimeout(timeout);
      };
    }, 3000);
  }, []);

  useEffect(() => {
    if(getValueFor("user_id")){
      setIsLogged(true);
    }
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }}>
          {isSplashScreen && <Stack.Screen name="SplashScreen" component={SplashScreen}></Stack.Screen>}
          {!isLogged && <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>}
          <Stack.Screen name="SignupScreen" component={SignupScreen}></Stack.Screen>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    // <PaperProvider>
    //   <View style={styles.body}>
    //     {isSplashScreen ? <SplashScreen /> : <Login />}
    //   </View>
    // </PaperProvider>
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
