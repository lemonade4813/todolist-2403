import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AppDispatch, RootState, addTodo, deleteTodo } from "../store/store";
import { useState } from "react";


export default function List(){

    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch: AppDispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo(newTodo));
        setNewTodo('');
      }
    };
  
    const handleDeleteTodo = (id: string) => {
      dispatch(deleteTodo(id));
    };

    return(
        <>
            <input placeholder ="할일을 입력해주세요" 
                   className="w-3/5 h-1/6 border-white rounded-2xl border-2 ml-5 mt-5 pl-3" 
                   value={newTodo}
                   onChange={(e) => setNewTodo(e.target.value)}
                   />
            <button className="border-white rounded-2xl border-2 h-1/6 w-40 ml-10"
                    onClick={handleAddTodo}
            >Add</button>
            <div className="mt-5">
              {todos.map((todo) => <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onDelete={handleDeleteTodo}
              
              />)}
            </div>
        </>
    
    )
}