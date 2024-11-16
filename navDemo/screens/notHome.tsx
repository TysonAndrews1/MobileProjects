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

export default function NotHome() : React.JSX.Element {
    

    return (
        <View>
            <Text>There</Text>
        </View>
      );
}
    
