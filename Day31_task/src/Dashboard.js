import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from './GlobalApi';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, count }) =>{ 
  const navigate =useNavigate()
return (
  <div onClick={()=>navigate(`/all${title}`)} className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-count">{count}</p>
  </div>
)
}


export const Dashboard = () => {
  const [teacher,setTeacher]=useState([])
  const [student,setStudent]=useState([])
  
  useEffect(()=>{
    axios.get(`${Api}/allteachers`)
    .then((res)=>setTeacher(res.data))
    axios.get(`${Api}/allstudents`)
    .then((res)=>setStudent(res.data))
  },[])
  return (
 <div className='dashboard'>
 <div className='cardcontainer'>
 <Card title={"Teachers"} count={`Total ${teacher.length}`}/>
 <Card title={"Students"} count={`Total ${student.length}`}/>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 
 </div>
    )
}
