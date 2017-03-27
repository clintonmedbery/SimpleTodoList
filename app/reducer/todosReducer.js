var defaultState = [{
    _id: "3324234234",
    text: "Mow Lawn"
},
{
    _id: "33123324234234",
    text: "Rake Lawn"
}];

module.exports = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.newTodo
            ];

        case 'DELETE_TODO':
            return state.filter((todo) => {
                //TODO Refactor with lodash perhaps
                if(todo._id === action.id){
                    return false;
                } else {
                    return true;
                }
            });
        
        
        default: return state;
    }
}