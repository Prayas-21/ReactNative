import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    StatusBar,
    TouchableHighlight,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function Signup({ navigation }) {
    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
  
    const validation = () => {
      let error = {};
  
      if (!email) {
        error.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email is invalid.";
      }
      if (!password) error.password = "Password is required";
  
      setError(error);
      return Object.keys(error).length == 0;
    };
  
    function onChangeName(text) {
      setName(text);
    }
  
    function onChangeEmail(text) {
      setEmail(text);
    }
    function onChangePassword(text) {
      setPassword(text);
    }
  
    function Register() {
      console.log(firstname, lastname);
      console.log(email);
      console.log(password);
      validation();
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.title}>Create Your Account !</Text>
        </View>

        <View style={styles.view23}>
        <View style={styles.view2}>
          <Image
            source={require("../assets/signup-background.jpg")}
            style={styles.img}
          />
        </View>
  
        <View style={styles.view3}>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your Name"
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
            />
  
            <TextInput
              placeholder="Enter your Email"
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
            />
  
            {error.email ? (
              <Text style={styles.errortext}>{error.email}</Text>
            ) : null}
  
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter Password"
              onChangeText={onChangePassword}
              value={password}
            />
            {error.password ? (
              <Text style={styles.errortext}>{error.password}</Text>
            ) : null}
          </View>
  
          <View style={styles.button}>
            <TouchableHighlight
              style={{
                backgroundColor: "#7F50DE",
                width: 300,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                marginBottom: 20,
              }}
              onPress={Register}
            >
              <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
                Sign Up
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Already have an account?</Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color:"#7F50DE",fontWeight: "bold", marginLeft: 6, marginBottom: 40 }}
            >
              Login
            </Text>
          </View>
        </View>
        </View>
  
        
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0e6ff",
      marginTop: StatusBar.currentHeight,
    },
    title: {
      color: "#7F50DE",
      marginTop: 30,
      fontSize: 25,
      fontWeight: "500",
    },
    view1: {
      alignItems: "center",
      Color:"#7F50DE"
    },
    view23: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      overflow: "hidden",
    },
    img: {
      height: "50%",
      width: "100%",
    },
    view2: {
      width: "50%",
      height: "50%",
      alignItems: "center",
      justifyContent: "center",
    },
    view3: {
      alignItems: "center",
      marginTop: "3%",
    },
  
    input: {
      height: 40,
      width: 300,
      backgroundColor: "rgba(0, 122, 255, 0.1))",
      borderRadius: 10,
      paddingLeft: 20,
      margin: 8,
    },
    button: {
      marginTop: 10,
    },
    errortext: {
      color: "red",
    },
  });