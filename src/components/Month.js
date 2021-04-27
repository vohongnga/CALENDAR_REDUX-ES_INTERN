import dayjs from "dayjs";
import {nextMonthAction, prevMonthAction} from "./../actions/month";
import { useDispatch, useSelector } from "react-redux";

export default function Month(){
    const dispatch = useDispatch();
    const {dayItem} = useSelector((state) => state.month);
    console.log(dayItem)
    return (
        <div className="month">
           <i className="fa fa-chevron-left previous" aria-hidden="true" onClick = {()=>dispatch(prevMonthAction())}></i>
           {dayItem.format('DD/MMM/YY').substr(3,3)}<br></br>{dayItem.format('DD/MMM/YYYY').substr(7,4)}
           <i className="fa fa-chevron-right ml-2 next" aria-hidden="true" onClick = {()=>dispatch(nextMonthAction())}></i>
        </div>
    );
}