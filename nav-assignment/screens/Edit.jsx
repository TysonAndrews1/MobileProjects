'use client'

import React, { useState,useEffect } from 'react';
import {Text, Pressable, View, TextInput,StyleSheet} from 'react-native'
import MainLayout from '../layouts/MainLayout';
import { getNewID,addEditTransaction, defaultTransactionEntry,TRANSACTION_DATA } from '../components/utility';
export default function Edit ({navigation,route}){
    const { transaction } = route.params;
    const [Title, setTitle] = useState(transaction.title);
    const [Desc, setDesc] = useState(transaction.desc);
    const [Amount, setAmount] = useState(transaction.amount.toString());
    const [Id, setId] = useState(transaction.id);
    const [selectedOption, setSelectedOption] = useState(transaction.type.toString()||'0');
    
    //erros
    const [titleError, setTitleError] = useState('');
    const [descError, setDescError] = useState('');
    const [amountError, setAmountError] = useState('');
    useEffect(() => {
        if (Id === "") {
          const newId = getNewID();
          setId(newId); // Update Id only if it's empty
        }
      }, []); // Only run this effect once after the initial render

    function HandleSubmit(){
        setTitleError('');
        setDescError('');
        setAmountError('');
        let isValid = true;
        let newTransaction = {...defaultTransactionEntry}
        if (!Title) {
            setTitleError('Title is required');
            isValid = false;
        }
        if (!Desc) {
            setDescError('Description is required');
            isValid = false;
        }
        if (!Amount) {
            setAmountError('Amount is required');
            isValid = false;
        }if (isNaN(parseFloat(Amount))){
            setAmountError("Amount must only be numbers")
            isValid = false;
            }

            if (!isValid) {
                return; // Don't submit if validation fails
            }
        newTransaction.id = Id
        newTransaction.title = Title
        newTransaction.desc = Desc
        newTransaction.amount = parseFloat(Amount)
        newTransaction.type = parseInt(selectedOption)
        addEditTransaction(newTransaction)
        navigation.navigate('Home');
        
    }

    function HandleAmountChange(amount){
        setAmount(amount)
    
    }
    return (
        <MainLayout>
        <View>
            <TextInput style={styles.input} placeholder='Enter Transaction Title' onChangeText={setTitle} value={Title} placeholderTextColor="#7a7b7d" ></TextInput>
            {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}
            <TextInput style={styles.input} placeholder='Enter Transaction Description' onChangeText={setDesc} value={Desc} multiline={true} numberOfLines={5} textAlignVertical='top'  placeholderTextColor="#7a7b7d" ></TextInput>
            {descError ? <Text style={styles.errorText}>{descError}</Text> : null}
            <TextInput style={styles.input} placeholder='Enter Transaction Amount' keyboardType='numeric' onChangeText={HandleAmountChange} value={Amount}  placeholderTextColor="#7a7b7d" ></TextInput>
            {amountError ? <Text style={styles.errorText}>{amountError}</Text> : null}


              <Pressable
          style={[styles.radioButton, selectedOption === '0' && styles.selected]}
          onPress={() => setSelectedOption('0')}
        >
          <Text style={styles.radioText}>Essential</Text>
        </Pressable>
        <Pressable
          style={[styles.radioButton, selectedOption === '1' && styles.selected]}
          onPress={() => setSelectedOption('1')}
        >
          <Text style={styles.radioText}>Leisure</Text>
        </Pressable>
        <Pressable
          style={[styles.radioButton, selectedOption === '2' && styles.selected]}
          onPress={() => setSelectedOption('2')}
        >
          <Text style={styles.radioText}>Other</Text>
        </Pressable>
            <Pressable title="submit" onPress={HandleSubmit} style={styles.submitButton}><Text style={styles.submitText}>Submit</Text></Pressable>
        </View>
        </MainLayout>
    );



}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    radioButton: {
      padding: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    selected: {
      backgroundColor: '#223866',
    },
    radioText: {
      fontSize: 16,
      color:"#fff"
    },
    submitButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      alignItems:'center'
    },
    submitText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    errorText:{
            color: 'red',
            marginTop: 5,
            fontSize: 14,
    },
    input:{
        borderWidth:1,
        borderColor:"white",
        color:'white',
        borderRadius:5,
        marginVertical:5,
    }
  });