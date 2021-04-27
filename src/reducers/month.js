import dayjs from "dayjs";

const initialState = {
    dayItem : dayjs()
};

export const monthReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'nextMonth':
            return{
                ...state,
                dayItem: state.dayItem.add(1,"month")
            } 
        case 'prevMonth':
            return{
                ...state,
                dayItem: state.dayItem.subtract(1,"month")
            } 
        default: 
            return{
                ...state,
                dayItem: state.dayItem
            }
    }
}