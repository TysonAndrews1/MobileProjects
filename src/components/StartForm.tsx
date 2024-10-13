import { SafeAreaView, View, Text, StyleSheet, TextInput, Clipboard, Pressable } from "react-native";
import React, { useState } from 'react';

function StartForm(): React.JSX.Element {
    
    return (
        <View>
            <View style={styles.OverView}>
                <Text></Text>
                <TextInput inputMode="text" maxLength={50} onChange={(txt) => console.log(txt)} style = {styles.bar}/>
            </View>
            <View style={styles.OverView}>
            <Text></Text>
            <TextInput inputMode="text" maxLength={50} onChange={(txt) => console.log(txt)} style = {styles.bar}/>
        </View>
        </View>
    );
}

export default StartForm;

const styles = StyleSheet.create(

    {
    outer: {
        height:50,
        width:150,
        backgroundColor: "white",
        justifyContent:"center"
     } ,
    OverView:{
        alignItems: 'center',
        justifyContent:'center',
        height: "100%",
        backgroundColor:"grey"
    },
    bar:{
        height:30,
        alignItems: 'flex-start',

    },
});