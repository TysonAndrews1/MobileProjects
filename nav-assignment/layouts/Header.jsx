import React from 'react';
import { View, StyleSheet,Text } from 'react-native';




export default function Header () {
    return (
        <View style ={styles.container}>
            <Text style ={styles.header}>Header</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    main:{
      backgroundColor:"Blue",
      color:"white",
      textAlign:"center",
        fontSize: 20,
        margin: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    header: {
        backgroundColor: 'lightblue',
        padding: 20,
        textAlign: 'center',
      },

})