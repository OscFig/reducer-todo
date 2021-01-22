// Need two things:
//1. The definition of our Data
//2. What can change our Data

//After creating reducer, you can create your action creator



//Definition: 
export const initialState = {
    todos:[{
        title:'todo 1',
        id:0,
        completed: false
    },{
        title:'todo 2',
        id:1,
        completed: false
    },{
        title:'todo 3',
        id:2,
        completed: false
        }
    ]
}
    //Change:
// state = initialState, action = what to do to state
const reducer = (state, action) => {
    // console.log(action,'test for onClick on App.js')
    switch(action.type) {
        case('ADD_TODO'):
            const newTodo = {
                id: state.todos.length,
                completed: false,
                title: action.payload
            }
            return({...state, todos:[...state.todos, newTodo]});//should return with the same shape  and must maitain with spread(...)
        case('TOGGLE_COMPLETED'):
            //1. map through each todo
            //2. if todo has the id we are looking (in the acton.payload),
            //return a copy of the item with completed flipped
            //e. if todo does not have id we are looking for, return the item as is.

            return({...state, todos:state.todos.map(todo => {
                if (todo.id === action.payload) {// if todo.id matches id of the action we pass in
                    return({...todo, completed: !todo.completed});// this will make a copy of that todo, but will flip the completed
                } else {// anything else just gets returned
                    return(todo);
                }
            })})
        case('CLEAR_COMPLETED'):
            return({
                ...state,
                todos:state.todos.filter( todo => {
                    return(!todo.completed);
                })
            })
        default:
            return state;
    }
}
export default reducer;