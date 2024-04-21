import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("Add todo called")
            const todo = {
                id: nanoid(),
                text: action.payload // text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            console.log("Remove todo called")
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return action.payload
                }
                return todo
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer