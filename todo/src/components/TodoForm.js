import React from 'react';

class TodoForm extends React.Component {
    // const [ state, dispatch ] = useReducer(reducer, initialState);

    state = {
        inputText:''
    }
//When form is submitted, handleAddTodo() is run. [step A]
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.inputText)
        
    }
    handleChange = event => {
        this.setState({
            inputText:event.target.value
        })
    }

    render(){
        console.log(this.state,'state')
        return(
            <div className='todoForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input onChange={this.handleChange} value={this.state.inputText}/>
                    </label>
                    <button>Submit Todo</button>
                </form>
            </div>);
    }
}
export default TodoForm;