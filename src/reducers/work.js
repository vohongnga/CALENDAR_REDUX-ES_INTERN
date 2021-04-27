const initialState = {
    date: '',
    works: []
}
export  const workReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'addWork':
            return {
                ...state,
                date: action.payload,
                works: ['Cong viec 1']
            }
        default:
            return state;
    }
}