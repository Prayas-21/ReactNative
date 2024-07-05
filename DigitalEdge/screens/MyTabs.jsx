import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons"

import Home from "./Home";
import Explore from "./Explore";
import Cart from "./Cart";
import Account from "./Account";


export default function MyTabs(){
    return(
    <Tab.Navigator>
    <Tab.Screen name ="Home" component={Home} options={{tabBarIcon: ({color,size})=>(<AntDesign name="home" color={"black"} size={18}></AntDesign>),}}/>
    <Tab.Screen name ="Explore" component={Explore} options={{tabBarIcon: ({color,size})=>(<AntDesign name="find" color={"black"} size={18}></AntDesign>),}}/>
    <Tab.Screen name ="Cart" component={Cart} options={{tabBarIcon: ({color,size})=>(<AntDesign name="shoppingcart" color={"black"} size={18}></AntDesign>),}}/>
    <Tab.Screen name ="Account" component={Account} options={{tabBarIcon: ({color,size})=>(<AntDesign name="user" color={"black"} size={18}></AntDesign>),}}/>
    </Tab.Navigator>
    );
    }
