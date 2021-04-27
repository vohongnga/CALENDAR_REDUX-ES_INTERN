import dayjs from "dayjs";
import { useSelector } from "react-redux";
import React, { useState } from "react";

export default function Calendar (){
   
    const {dayItem} = useSelector((state) => state.month);
    
    const today = dayjs();
    console.log(today.date());
    const thisYear = dayItem.year();
    const thisMonth = dayItem.month() 
    const daysInMonth = dayItem.daysInMonth()

    const dayOfFirst = dayjs(`${thisYear}-${thisMonth + 1}-1`)
    const dayWeekOfFirst = dayOfFirst.day() 

    const dayOfLast = dayjs(`${thisYear}-${thisMonth+1}-${daysInMonth}`)
    const dayWeekOfLast = dayOfLast.day()

    const showDayBefore = ()=>{
        const arrDayBefore = [];
        for(let i=0; i<dayWeekOfFirst; i++){
            arrDayBefore.push(i);
        }
        const result = arrDayBefore.map((index,key)=>{
            return(
                <div className="item notInMonth" key={key}>
                    <p data-toggle="modal" data-target="#exampleModal">{dayOfFirst.subtract(dayWeekOfFirst-index, "day").date()}</p>
                </div>
            )
       })
       return result;
    };

    const showDaysInMonth = ()=>{
        const arrDaysInMonth = [];
        for(let i=1; i<daysInMonth; i++){
            arrDaysInMonth.push(i);
        }
      const result = arrDaysInMonth.map((date,index)=>{
          let active = "";
            if(date === today.date() && thisMonth === today.month() && thisYear === today.year()){
                active = "active";
            }else{
                active = "";
            }
            return(
                
                <div className={`item ${active}`} key={index}>
                    <p data-toggle="modal" data-target="#exampleModal">{date}</p>
                </div>
            )
       })
       return result;
    }
    const showDayAfter = ()=>{
        const arrDayAfter = [];
        for(let i=dayWeekOfLast; i<6; i++){
            arrDayAfter.push(6-i);
        }
        console.log(arrDayAfter)
        const result = arrDayAfter.reverse().map((index, key)=>{
            return(
                <div className="item notInMonth" key={key}>
                    <p data-toggle="modal" data-target="#exampleModal">{dayOfFirst.add(index-1, "day").date()}</p>
                </div>
            )
       })
       return result;
    }
    return(
    <div className="calendar">
        <div className = "date">
            <h5>Sun</h5>
            <h5>Mon</h5>
            <h5>Tue</h5>
            <h5>Wed</h5>
            <h5>Thu</h5>
            <h5>Fri</h5>
            <h5>Sat</h5>
        </div>
        <div className = 'date'>
            {showDayBefore()}
            {showDaysInMonth()}
            {showDayAfter()}
        </div>
        
    </div>
);
}