import React, { useContext, useState } from 'react'
import TodosContext from '../contexts/TodosContext';

const CreateTodo = () => {

    const [todo, setTodo] = useState('')
    const {dispatch} = useContext(TodosContext);

    const handleSubmit = e => {
        e.preventDefault();

        if(!todo) return;

        dispatch({
            type: 'add',
            payload: {
                id: Date.now(),
                desc: todo,
                done: false
            }
        }) 

        setTodo('');
    }

    


    return (
        <div className="create">
            <div className="create__circle"></div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Crea un nuevo todo..." 
                    className="create__input"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
            </form>
        </div>
    )
}

export default CreateTodo
