import { createSlice } from '@reduxjs/toolkit'


export const todoList = createSlice({
    name: 'todolist',
    initialState: {},
    reducers: {
        todoLists: (state, actions) => {
            return {
                ...state,
                ...actions
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {todoLists} = todoList.actions

export default todoList.reducer