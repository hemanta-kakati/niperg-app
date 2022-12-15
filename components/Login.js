import { StyleSheet, View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { Link } from "@react-navigation/native";
import axios from "axios";

const baseUrl = "http://172.16.120.26/niperg-app-api/api.php?action=";
const Login = () => {
  const [email, setEmail] = useState("");
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
  }, [email]);

  const handleLogin = async () => {
    try {
      const resp = await axios.post(
        `${baseUrl}login_user`,
        {
          email,
          password,
        },

        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const { payload, msg } = resp.data;
      if (payload == 2) {
        setEmail("");
        setPassword("");
        Alert.alert(
          "Authentication failed",
          "The email or password you have entered is wrong!",
          [
            {
              text: "Close",
              style: "cancel",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {},
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <View style={{ marginBottom: 20, marginTop: 20 }}>
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
      <Link style={{marginBottom: 15}} to={{ screen: "Profile", params: { id: "jane" } }}>
        Don't have an account Sign Up.
      </Link>
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
    alignItems: "center",
  },
});

export default Login;
