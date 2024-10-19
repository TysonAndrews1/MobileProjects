"use Client"

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";

type outputPropType = {
    Value : string,
    onChange: (value:string)=>void
}


function InputBox(props: outputPropType) : React.JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const {Value, onChange} = props


    const handleInputChange = (text: string) => {
        // Use a regular expression to check if the input is a number
        if (/^\d*$/.test(text)) {
            onChange(text); // Update the parent component state
        }
    };

    return (
        <View>
            <TextInput maxLength={2} style ={style.textbox} placeholder="Requested Length (8-16)" value={Value}     onChangeText={handleInputChange} keyboardType="numeric"></TextInput>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    outputView: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        width: '100%',
        height: 60,
        alignSelf: 'center',
        paddingStart: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },

    outputTxt: {
        fontSize: 25,
        fontWeight: '600',
        // color: '#3C3D37',
    },

    iconView: {
        width: 55,
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#B7B7B7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        
    },
    textbox: {
        borderRadius: 3,
        margin: 4,
        borderColor:"green",
        backgroundColor:"red",
        color:"green"
    }
});

export default InputBox;