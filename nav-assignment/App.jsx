"use client"

import React, { useState } from 'react';
import Home from './screens/Home';
import Edit from './screens/Edit';
import Details from './screens/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,TouchableOpacity} from "react-native";



const Stack = createNativeStackNavigator(); 
export default function NavigationApp({navigation}) {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle:{
            backgroundColor:'#272930',
 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Details"component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}