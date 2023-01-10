import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoInput = props => {
    const [enteredToDo, setEnteredToDo] = useState([]);

    const toDoInputHandler = enteredToDo => {
        setEnteredToDo(enteredToDo);
    };

    const addToDoHandler = () => {
        props.onAddToDo(enteredToDo);
        setEnteredToDo('');
    }

    return (
    // <Modal></Modal>
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder="ToDo Item"
            style={styles.input}
            onChangeText={toDoInputHandler}
            value={enteredToDo}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}><Button color="red" title="Cancel" onPress={props.onCancel}/></View>
            <View style={styles.button}><Button title="Add" onPress={addToDoHandler}/></View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: '80%'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    
    button: {
        width: '40%',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ToDoInput;