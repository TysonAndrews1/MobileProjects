"Use Client"

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import  ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Appl() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Go Outside'
  ])  
  return (
    <SafeAreaView style = {styles.main}>
      <ToDoList tasks={tasks} />
      <ToDoForm/>
 
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
    main:{
      backgroundColor:"grey",
      height:'100%'

    }




})

export default Appl;
