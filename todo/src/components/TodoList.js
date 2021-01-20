import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const handleClick = () => {
        props.handleClearCompleted();
    }

    return(
        <div className='ListContainer'>
            <h3>List of Items</h3>
            <ul>
                {
                    props.todos.map(todo => {
                    return(<Todo handleToggleCompleted={props.handleToggleCompleted} todo={todo}/>)
                    })
                }
            </ul>
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
}
export default TodoList;