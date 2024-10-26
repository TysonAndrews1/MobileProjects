"Use Client"

import React, { useState } from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

type outputPropType = {
  addTask : Function
}
 function ToDoForm(props : outputPropType) {
const {addTask} = props
const [taskText, setTaskText] = useState('')

  return(
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task..."
      onChangeText={(text) => setTaskText(text)}
      value={taskText}
    />
    <Button title="Add" onPress={() => addTask(taskText)} />
  </View>
  )
}
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'green',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      color: "white"
    },
  });
  export default ToDoForm