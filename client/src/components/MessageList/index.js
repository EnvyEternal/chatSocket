import React, { Component, useState } from 'react'


const MessageList = (props) =>{
    const {messeges} = props

    return (<><ul>{messeges.map((m,index) => {
        return (
          
            <div className='mes'>
                <div>{m.room}</div>
                <div key={index}>{m}</div> 
            </div>
          
          )
      })}
</ul></>)
}

export default MessageList