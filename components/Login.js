import { StyleSheet, View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [hasEmailErr, setHasEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  // const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateEmail = (val) => {
    if (val && val.match(isValidEmail)) {
      setHasEmailErr(false);
    } else {
      setHasEmailErr(true);
    }
  };

  useEffect(() => {
    validateEmail(email);
    console.log(hasEmailErr);
  }, [email]);

  const handleLogin = () => {};

  return (
    <View style={styles.body}>
      <View style={{marginBottom: 20, marginTop: 20}}>
        <Image
          source={require("../assets/niperg-logo-medium.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TextInput
        label="Email"
        value={email}
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        error={hasEmailErr}
      />
      <TextInput
        label="Password"
        value={password}
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      <Button icon="account" mode="outlined" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    alignItems: 'center'
  }
});

export default Login;
