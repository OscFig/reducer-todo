import react, { useState, useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';

const TodoForm = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return(
        <div className='TodoForm'>
            <div className='checkbox'>
                <label>
                <input 
                    type='checkbox'
                    name='check'
                />{state.title}</label>
            </div>
        </div>
    )
}
export default TodoForm;