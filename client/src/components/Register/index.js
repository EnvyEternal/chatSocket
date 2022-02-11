import React, { useEffect, useState, useRef } from 'react';
import {emitMassage,} from '../../api/ws/api';
import MessageList from '../MessageList';
import socket from '../../api/ws';

function Register() {
    const [value, setValue] = useState()
    const [mes, setMes] = useState([])
    const [name, setName] = useState()
    const [room, setRoom] = useState()

    const send = () =>{
      emitMassage(value, name).on('message', (messege, name) => {
        setMes([...mes, name, messege])

        })
      console.log(mes)
      }
    
    const ans = () =>{socket.on('message', (messege, name)=>{
      return setMes([...mes, name ,messege])
    })
    console.log(mes)}

    useEffect(()=>{
      ans()
    },[mes])
  return( 
    <>
        <MessageList messeges={mes} />
        <input type='text' onChange={(e)=> setValue(e.target.value)}></input>
        
        <button onClick={send}>Register</button>
        <input type='text' onChange={(e)=> setRoom(e.target.value)} value={room}></input>
        
    </>
  )
}

export default Register;


