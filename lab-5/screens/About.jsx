"use client"
import MainLayout from "../layouts/MainLayout"
import React,{useState} from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet
} from "react-native";


export default function About({navigation}){
    

    return (
        <MainLayout>
            <Text style = {styles.text}>App Name: Tyson's ToDoListLab</Text>
            <Text style = {styles.text}>My Name: Tyson Andrews</Text>
            <Text style = {styles.text}>Current Date: 15/11/2024</Text>
            <Pressable onPress={() => navigation.navigate('Home') } style = {styles.button}  >
                <Text style = {styles.text}>Go to Home</Text>
            </Pressable>
        </MainLayout>
      );
}
    
const styles = StyleSheet.create({
    main:{
      backgroundColor:"grey",
      height:'100%'

    },
    text:{
        fontSize: 24,
        color:"white"
    },
    button:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        marginVertical:10,
        backgroundColor: '#b0964d'
    }
})