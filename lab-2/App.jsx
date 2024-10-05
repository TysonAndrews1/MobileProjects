/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import  ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Appl() {
  return (
    <SafeAreaView style = {styles.main}>
      <ToDoList/>
      <ToDoForm/>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    main:{
      backgroundColor:"grey",
      height:'100%'

    }




})

export default Appl;
