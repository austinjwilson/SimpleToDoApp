import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import ToDoInput from "./components/ToDoInput";
import ToDoItem from './components/ToDoItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [toDoItems, setToDoItems] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length===0){
      Alert.alert("Enter a Goal");
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, { id : Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const addToDoHandler = toDoTitle => {
    if (toDoTitle.length===0){
      Alert.alert("Enter a To Do Item");
      return;
    }
    setToDoItems(toDoItems => [...toDoItems, {id : Math.random().toString(), value:toDoTitle }]);
    setAddMode(false);
  };

  const removeToDoHandler = toDoId => {
    setToDoItems(toDoItems => {
      return toDoItems.filter(toDo => toDo.id !== toDoId);
    });
  };

  const cancelToDoAddHandler = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World</Text>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
       <StatusBar style="auto" /> */}
       <ToDoInput onAddToDo={addToDoHandler} onCancel={cancelToDoAddHandler}/>
       <FlatList keyExtractor={(item, index) => item.id}
          data={toDoItems}
          renderItem={itemData => <ToDoItem id={itemData.item.id} onDelete={removeToDoHandler} title={itemData.item.value}/>}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold"
  },
  text: {
    fontWeight: "bold"
  } 

  // screen: {
  //   padding: 50
  // }
});
