import React, { useContext } from 'react'
import TodosContext from '../contexts/TodosContext';
import Data from './Data';

const TodoList = () => {

    const { state, dispatch } = useContext(TodosContext);

    const handeDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleComplete = (id) => {
        dispatch({
            type: 'complete',
            payload: id
        })
    }

    return (
        <div className="list">
            {
                state.map(todo => (
                    <div key={todo.id} className="todo__item">
                        <div className="todo__content">
                            <div onClick={() => handleComplete(todo.id)} className="create__circle">
                                {todo.done && (
                                    <div className="done">
                                        <img src="./img/check.png" alt="" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="align-left"> 
                            <p className={todo.done && 'todo-done'}>{todo.desc}</p>
                        </div>

                        <img onClick={() => handeDelete(todo.id)} className="todo__delete" src="./img/delete.png" alt="Delete" />
                    </div>
                ))
            }

            <Data />
        </div>
    )
}

export default TodoList
