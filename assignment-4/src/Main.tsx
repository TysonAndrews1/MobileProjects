"use client"

import React,{useState} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home.tsx"


const stack = createNativeStackNavigator();

function MainN() : React.JSX.Element {

    const [Lower, setLower]= useState(false)
    const [Upper, setUpper]= useState(false)
    const [Symbol, setSymbol]= useState(false)
    const [Numbers, setNumbers]= useState(false)
    const [Length, setLength]= useState("")
    const [password, setPassword]=useState("");
    const stack = createNativeStackNavigator();
    
    

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