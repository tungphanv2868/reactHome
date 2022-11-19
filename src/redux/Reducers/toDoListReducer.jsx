

const stateDefault = {
    arrTask: [
        {taskName:'frontend', status: false},
        // {taskName:'backend', status: true},
    ]
}

export const toDoListReducer = (state = stateDefault, action) =>{
    switch(action.type) {
        case 'GET_ALL_TASK' : {
            state.arrTask = action.arrTask;
            return {...state};
        }

        default : return state;
    }
}