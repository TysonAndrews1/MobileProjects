"use client"

import React,{useState} from "react";
import {
    View,
    Text,
} from "react-native";

import Clipboard from "@react-native-clipboard/clipboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home"

function copyToClipboard(inputString: string){
    console.log("Copied");
   return  Clipboard.setString(inputString)
}

const stack = createNativeStackNavigator();

function MainN() : React.JSX.Element {

    const [Lower, setLower]= useState(false)
    const [Upper, setUpper]= useState(false)
    const [Symbol, setSymbol]= useState(false)
    const [Numbers, setNumbers]= useState(false)
    const [Length, setLength]= useState("")
    const [password, setPassword]=useState("");
    
    

    return (
        <NavigationContainer >
            <stack.Navigator>
                <stack.Screen name="Home" component={Home}>

                </stack.Screen>
            </stack.Navigator>
            </NavigationContainer>
      );
}
    

export default MainN;