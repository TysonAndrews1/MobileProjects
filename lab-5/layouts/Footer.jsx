import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Footer () {
return (
    <View  style ={styles.container}>
    <Text style ={styles.main}>Footer</Text>

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
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        
    }
})