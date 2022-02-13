import TodosContext from '../contexts/TodosContext';
import React, { useContext } from 'react'

const Data = () => {

    const { state, dispatch } = useContext(TodosContext);
    const left = state.filter(todo => !todo.done);

    const handleEmpty = () => {
        dispatch({
            type: 'empty'
        })
    }


    return (
        <div className="data">
            <p>{left.length} items restantes</p>
            <button className="empty" onClick={handleEmpty}>Vaciar</button>
        </div>
    )
}

export default Data
