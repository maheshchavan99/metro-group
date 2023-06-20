
import { configureStore } from '@reduxjs/toolkit'
import { todoList } from './todolist'
export const store = configureStore({
  reducer: {
    todoList:todoList
  },
})