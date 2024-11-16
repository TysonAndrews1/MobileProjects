import React from "react"
import {StyleSheet, Text, View} from "react-native"
import { TransactionType } from "./utility"

export default function Transaction({ transaction }: { transaction: { id: string, title: string, desc: string, amount: number, type: TransactionType } }): React.JSX.Element {

    let styling;
    switch (transaction.type){
        case 0 : styling = styles.Essential 
        break;
        case 1: styling = styles.Leisure
        break; 
        default: styling = styles.Other
        break;
    }

    return (
    <View style = { [styles.All,styling]}>
        <Text style = {styles.text}>{transaction.title}</Text>
        <Text style = {styles.text}>{transaction.amount}$</Text>
    </View>
)
}
const styles = StyleSheet.create({
    Leisure: {
        backgroundColor:"#FFCFB3"
    },
    Other: {
        backgroundColor:"#CAF4FF"
    },
    Essential:{
        backgroundColor:"#C9E9D2"
    },
    All:{
        margin: 3,
        height: 60,
        alignItems: 'center',
        zIndex: 0,
        borderRadius: 10, // Optional, for rounded corners
    },
    text:{
        fontSize:22,
        fontFamily:'times-new-roman',
    }
  }
);
  