import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,

} from 'react-native';



function ToDoList() {
    return(

    <ScrollView>
    <Pressable>
      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Play Games</Text>
      </View>
    </Pressable>
    <Pressable>
      <View style={[styles.task]}>
        <Text style={styles.taskText}>Procrastinate</Text>
      </View>
    </Pressable>
    <Pressable>
      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Study</Text>
      </View>
    </Pressable>
  </ScrollView>
    )
}
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: 'green',
      postition:"flex",
      alignItems:"center"
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