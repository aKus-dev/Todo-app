import { useEffect, useReducer } from "react"
import TodosContext from "../contexts/TodosContext"
import todoReducer from "../reducers/todoReducer"
import CreateTodo from "./CreateTodo"
import Theme from "./Theme"
import TodoList from "./TodoList"


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoContainer = () => {
 
    const [state, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            <div className="todo-container">
                <Theme />
                <CreateTodo />
                {state.length !== 0 && <TodoList />}
            </div>
        </TodosContext.Provider>
    )
}

export default TodoContainer
