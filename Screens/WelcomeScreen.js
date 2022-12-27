import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Button } from "react-native-paper";

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    alert("No values stored under that key.");
  }
}

const WelcomeScreen = () => {
  const [userName, setUserName] = useState("");

    const deleteSession = async () => {
        
        const res = SecureStore.deleteItemAsync("user_id");
        console.log(res);
    }

  useEffect(() => {
    if (getValueFor("user_id")) {
        const name = getValueFor("user_name");
        console.log(name);
        setUserName(name);
    }
  }, []);
  return (
    <View>
      <Text>Welcome to NIPERG</Text>
      <Button icon="camera" mode="contained" onPress={deleteSession} style={{
        
      }}>Logout</Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({

});
