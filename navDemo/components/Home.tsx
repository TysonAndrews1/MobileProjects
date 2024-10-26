"use client"

import React,{useState} from "react";
import {
    View,
    Text,
} from "react-native";

import Clipboard from "@react-native-clipboard/clipboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function copyToClipboard(inputString: string){
    console.log("Copied");
   return  Clipboard.setString(inputString)
}

export default function Home() : React.JSX.Element {

    const [Lower, setLower]= useState(false)
    const [Upper, setUpper]= useState(false)
    const [Symbol, setSymbol]= useState(false)
    const [Numbers, setNumbers]= useState(false)
    const [Length, setLength]= useState("")
    const [password, setPassword]=useState("");
    const stack = createNativeStackNavigator();
    

    return (
        <View>
            <Text>Here</Text>
        </View>
      );
}
    
