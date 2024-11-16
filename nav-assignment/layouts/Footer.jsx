import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Footer () {
    return (
        <View style ={styles.container}>
            <Text style ={styles.footer} >Created By Tyson Andrews</Text>
        </View>
    )
}









const styles = StyleSheet.create({
    main:{
        backgroundColor:"Blue",
        color:"white",
        textAlign:"center",
          fontSize: 20,
          margin: 10
    },
    container:{
        backgroundColor:"grey",
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 5,
        paddingVertical: 5,
        
    },
    footer: {
        backgroundColor: 'lightgreen',
        padding: 10,
        textAlign: 'center',
      },
})