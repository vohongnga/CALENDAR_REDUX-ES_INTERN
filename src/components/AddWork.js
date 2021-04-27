import { useSelector,useDispatch } from "react-redux";
import React, { useState } from "react";
import {nextMonthAction, prevMonthAction} from "./../actions/month";

export default function AddWork(){
    const dayItem = useSelector((state) => state.dayItem);
    const dispatch = useDispatch();
    const showHourStart = ()=>{
        const hours = Array.apply(null, {length: 24}).map(Number.call, Number);
        console.log(hours);
        const result = hours.map((hour, index)=>{
            return(
                <option id={hour}>{hour+1}</option>
            );
        })
        return result;
    };

    const showMinuteStart = ()=>{
        const minutes = Array.apply(null, {length: 60}).map(Number.call, Number);
        
        const result = minutes.map((minute, index)=>{
            return(
                <option id={minute}>{minute+1}</option>
            );
        })
        return result;
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(nextMonthAction());
    }
    const onChangeHour = (e)=>{
        let hour = e.target.value
        alert(hour)
    }
    console.log(dayItem)
    return(
        <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content modifiedModal">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Thêm công việc</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
                    <form onSubmit = {(e)=>onSubmit(e)}>
                        <textarea row="8" className= "form-control" placeholder = "Nhập nội dung" name = "content" value = "" onChange = {(e)=>onChangeHour(e)}></textarea>
                        Bắt đầu: 
                        <select name ="hourStart" className=" mt-10" >
                            <option>Chọn giờ:</option>
                        {showHourStart()}
                        </select>
                        <select name ="minuteStart" className=" mt-10">
                            <option>Chọn phút:</option>
                        {showMinuteStart()}
                        </select>
                        <br></br>
                        <button type="button" className="btn btn-secondary right" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary right">Save changes</button>
                    </form>
                    
                    
                </div>
                
        
            </div>
            </div>
    );
}
