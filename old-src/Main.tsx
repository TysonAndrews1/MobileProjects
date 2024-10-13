import { SafeAreaView, View, Text, StyleSheet, TextInput, Clipboard, Pressable } from "react-native";
import strength from "./components/utility"; // Assuming this is a function you defined
import React, { useState } from 'react';

function Main(): React.JSX.Element {
    const [barStrength, setBarStrength] = useState(0);

    function update(Password: string) {
        const newStrengthValue = strength(Password);
        setBarStrength(newStrengthValue);
    }

    const barStyle= [
        { backgroundColor: "white", width: 0 },
        { backgroundColor: "red", width:  30 },
        { backgroundColor: "yellow", width: 60 },
        { backgroundColor: "purple", width: 90 },
        { backgroundColor: "pink", width: 120 },
        { backgroundColor: "green", width: 150 }
    ];
    let inpuTxt = "";
    function copyTxt(){
        Clipboard.setString(inpuTxt);
    }
    return (
        <SafeAreaView>
            <View style={styles.OverView}>
                <TextInput 
                    placeholder="Enter Password" 
                    onChangeText={update}
                    value={inpuTxt}
                />
                <View style={styles.outer}>
                    <View style={[styles.bar, barStyle[barStrength]]} />
                </View>
                <Pressable onPress={copyTxt}>copy</Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Main;

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