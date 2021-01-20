import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addTodo, toggleCompleted, clearCompleted } from './actions/index';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

// Receives the title from TodoForm, then it passes it to the action creator, 'addTodo()' 
// dispatch connects that to the reducer
    const handleAddTodo = (title) => {
        dispatch(addTodo(title));
    }

    const handleToggleCompleted = (id) => {
        dispatch(toggleCompleted(id))
    }
    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    }
console.log(state)
  return (
    <div className="App">
        <h1>ToDo App</h1>
        {/* <button onClick={handleClearCompleted}>test button</button> */}
        <TodoList todos={state.todos} handleClearCompleted={handleClearCompleted} handleToggleCompleted={handleToggleCompleted}/>
        <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
