import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import MyTabs from './screens/MyTabs';
import Textinput from "./components/Textinput"
import Buttons from "./components/Buttons"
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import { CartProvider } from "./screens/CartContext";



export default function App() {
  return (
    
    <GestureHandlerRootView>
      <CartProvider>
      <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MyTabs" component={MyTabs}/> 
        <Stack.Screen name="HomeTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
        {/* <Stack.Screen name="Buttons" component={Buttons}/> */}
        {/* <Stack.Screen name="Textinput" component={Textinput}/>     */}

      </Stack.Navigator>
    </NavigationContainer>
      </CartProvider>
      
      <StatusBar style="auto" />
    </GestureHandlerRootView>
    
    
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});