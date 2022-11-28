import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Email"
        value={email}
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
  },
});

export default Login;
