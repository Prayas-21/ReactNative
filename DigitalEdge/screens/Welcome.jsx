import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "./Login";
import Signup from "./Signup";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
const Welcome = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate("Signup");
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.view1}>
        <Text style={styles.titleTxt1}>
          Shop on <Text style={styles.titleTxt2}>DigitalEdge</Text>
        </Text>
        <Text style={styles.titleTxt1}>& Find the Best Gagdets</Text>
        <Text style={styles.titleTxt1}>and upgrade your Lifestyle!</Text>
      </View>

      <View style={styles.view2}>
        <Image
          source={require("../assets/welcome-background.jpg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View style={styles.view3}>
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
          onPress={handleSignupPress}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            CREATE A NEW ACCOUNT
          </Text>
        </TouchableHighlight>
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
          onPress={handleLoginPress}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            LOGIN TO EXSISTING ACCOUNT
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: 300,
    height: 300,
  },
  view1: {
    marginTop: 50,
    position: "absolute",
    top: 0,
  },
  view2: {
    marginTop: "10%",
    marginBottom: "10%",
    position: "relative",
    top: "25%",
  },
  view3: {
    marginBottom: "10%",
    position: "absolute",
    bottom: 0,
  },
  titleTxt1: {
    textAlign: "center",
    color: "#13245f",
    fontSize: 25,
    fontWeight: "500",
  },
  titleTxt2: {
    textAlign: "center",
    color: "#7F50DE",
    fontSize: 25,
    fontWeight: "800",
  },
});