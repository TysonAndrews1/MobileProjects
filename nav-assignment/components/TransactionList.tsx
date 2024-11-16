"use client"
import React, {useState,useEffect} from 'react';
import { View, StyleSheet,Text,Pressable } from 'react-native';
import { getInitialData,TRANSACTION_DATA } from './utility';
import Transaction from './transaction';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RootStackParamList } from './utility'; // Import your navigation types

type TransactionListNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

interface TransactionListProps {
    navigation: TransactionListNavigationProp; // Type the navigation prop properly
  }

export default function TransactionList({ navigation }: TransactionListProps) : React.JSX.Element{
    const [TransactionArray, setTransactionArray] = useState(getInitialData()); 
    useEffect(() => {
        const interval = setInterval(() => {
          const updatedData = [...TRANSACTION_DATA]  // Pull the updated data from your utility function
          setTransactionArray(updatedData);  
            // Update state when data changes
        }, 1000); 
        return () => clearInterval(interval);
      }, [TRANSACTION_DATA]);  // This assumes TRANSACTION_DATA might change on its own
    return (
        <View style={styles.container}>
          {TransactionArray.length === 0 ? (
            <Text style={styles.emptyArray}>Please add a transaction to view Content.</Text> // Show message if empty
          ) : (
            TransactionArray.map((transactionI) => (
              <Pressable
                style={styles.button}
                key={transactionI.id}
                onPress={() => {
                  navigation.navigate('Details', { transaction: transactionI });
                }}
              >
                <Transaction transaction={transactionI} />
              </Pressable>
            ))
          )}
        </View>
      );
    }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'

    },
    button: {
        width: '100%', // Ensure Pressable fills the width of the parent
        backgroundColor: 'transparent', // Make sure background is transparent (or change color)
        zIndex:3,

    },
    emptyArray:{
        fontSize: 30,
        textAlign:'center',
        color:'#fff'
    }

  });