
const INITIAL_STATE = {
    todo : []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'add':
            return {
                ...state, todo : [...state.todo, action.payload]
            };
        case 'delete':
            return {
                ...state, todo : state.todo.filter(item => item.id !== action.payload)
            };

        default: return state;
    }
}

export default reducer; 