import { type } from '@testing-library/user-event/dist/type'
import React from 'react';


export const addTodo = () => {
  return (
    type :'ADD_TODO'
  )
}
export const deleteTodo = () => {
    return (
      type: 'DELETE_TODO'
    )
  }
  
  export const removeTodo = () => {
    return (
      type: 'REMOVE_TODO'
    )
  }