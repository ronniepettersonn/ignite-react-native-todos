import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newDate = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, newDate])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    tasks.map(task => {
      if(task.id === id) {
        if(task.done === false) {
          setTasks(oldState => oldState.map(task => {
            if(task.id === id) {
              return {
                id: task.id,
                title: task.title,
                done: true
              } 
            } else {
              return task
            } 
          }))
        } else if(task.done === true) {
          setTasks(oldState => oldState.map(task => {
            if(task.id === id) {
              return {
                id: task.id,
                title: task.title,
                done: false
              } 
            } else {
              return task
            } 
          }))
        }
    }
    })
  }


  function handleRemoveTask(id: number) {
    const filtered = tasks.filter(task => task.id !== id)

    setTasks(filtered)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})