
module.exports = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.newTodo
            ];

        case 'GET_TODOS':
            return action.todos;

        case 'DELETE_TODO':
            return state.filter((todo) => {
                //TODO Refactor with lodash perhaps
                if (todo._id === action.todo_id) {
                    return false;
                } else {
                    return true;
                }
            });


        default: return state;
    }
}