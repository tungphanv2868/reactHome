
const stateDefault = {
    arrContent : [
        {name:'Truong' , content:'hello, hello!'},
        {name:'John', content:'hello, hello!'},
    ]
}

export const FaceBookAppReducer = (state = stateDefault, action) => {
    switch (action.type){
        case 'COMMENT' : {
            state.arrContent = [...state.arrContent, action.userComment];
            return {...state};
        }
        default: return state;
    }
}