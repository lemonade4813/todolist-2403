import { PayloadAction, combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import {v4} from 'uuid'

interface Todo {
    id : string;
    text : string;
}

interface TodoState{
    todos : Todo[];
}


const initialState : TodoState = {todos : []}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
        const newTodo: Todo = {
          id: v4(),
          text: action.payload,
        };
        state.todos = [...state.todos, newTodo]
      },
      deleteTodo: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
    },
  });

export const {addTodo , deleteTodo } = todoSlice.actions




export const store = configureStore({
    reducer : {
        todos : todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;