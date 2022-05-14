import * as React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Keyboard  } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = React.useState()
  const [taskItems, setTaskItems] = React.useState([])

  const handleTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask('')
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
        {taskItems.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task  text={item} />
              </TouchableOpacity>
            )
        })}
        </View>
      </View>

      <KeyboardAvoidingView  
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      > 
        <TextInput 
          style={styles.input} 
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}  
        />

        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27272a',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fafafa'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f4f4f5',
    borderRadius: 60,
    width: 250,
    borderColor: '#C0C0C0',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
