export const initialState = {
    title:'Learn about reducers',
    editing:false,
    id: 3892987589
}

const reducer = (state, action) => {
    switch(action.type) {
        case('SET_TITLE'):
            return({...state, title: action.payload});
        case('SET_EDITING'):
            return({...state, editing: action.payload});
        case('SET_NEW_TITLE_TEXT'):
            return({...state, newTitleText: action.payload});
        default:
            return(state);
    }
}
export default reducer;