import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  FlatList

} from 'react-native';



function ToDoList({tasks}) {  
  return(

    <ScrollView>
      {tasks.map((task,index) => (<View style={[styles.task, styles.uncompleted]}>
        <Text key={index} style={styles.taskText}>{task}</Text>
        </View>))}
    <Pressable>
      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Water the plants</Text>
      </View>
    </Pressable>
    <Pressable>
      <View style={[styles.task, styles.uncompleted]}>
        <Text style={styles.taskText}>Games</Text>
      </View>
    </Pressable>
    <Pressable>
      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Procrastinate</Text>
      </View>
    </Pressable>
  </ScrollView>
    )
}
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      postition:"flex",
      alignItems:"center",
      margin: 2
    },
    uncompleted:{
      backgroundColor:"red"
    },
    completed: {
      backgroundColor: 'black',
    },
    taskText: {
      fontSize: 16,
      color: "white"
    },
  });

  export default ToDoList