"use client"
import MainLayout from "../layouts/MainLayout";
import React,{useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    Text
} from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

export default function Home({navigation}) {
    
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Go Outside'
      ])  
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
        console.log(tasks);
        
      };
    return (
        <MainLayout>
        <SafeAreaView style = {styles.main}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask}/>
        <Pressable
            onPress={() => navigation.navigate('About')}
        >
          <Text style = {styles.button}>Go to About</Text></Pressable>
      </SafeAreaView >
      </MainLayout>
      );
}
    

const styles = StyleSheet.create({
    main:{
      backgroundColor:"grey",
      height:'100%'
    },
    button:{
      flex: 1,
      borderWidth: 1,
      borderColor: 'green',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      marginVertical:10,
      backgroundColor: '#b0964d'

    }
})