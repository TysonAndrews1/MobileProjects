"use client"

import React,{useState} from "react";
import {
    View,
    Text,
    Pressable,
} from "react-native";



export default function Home({navigation}) : React.JSX.Element {
    

    return (
        <View>
            <Text>Here</Text>
            <Pressable onPress={()=>navigation.navigate('notHome')} >ToOther</Pressable>
        </View>
      );
}
    
