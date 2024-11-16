'use client'

import React, { useState } from 'react';
import {ScrollView, Text, Pressable,TouchableOpacity,StyleSheet,View} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'; // For back arrow icon
import TransactionList from '../components/TransactionList';
import FAB from '../components/FAB';
import MainLayout from '../layouts/MainLayout';





export default function Home ({navigation}){

return (
    <MainLayout>
    <ScrollView style = {styles.container}>
          <TransactionList navigation={navigation}/>

    </ScrollView>
    <View style = {styles.bottom}>
          <FAB/>
          </View>
    </MainLayout>
);


}

const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    bottom:{
        bottom: 0 
    }
  });