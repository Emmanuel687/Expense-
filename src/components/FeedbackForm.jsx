import React from 'react'
import Card from '../Shared/Card'
import Button from '../Shared/Button';
import { useState } from 'react';


export default function FeedbackForm() {
    const[text,setText]=useState(``);
    const[btnDisable,setBtnDisabled]=useState(true);
    const[message,setMessage]=useState(``)

    const handleTextChange = (e)=>{

        if(text===``){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== ``&&text.trim().length<=10){
            setMessage('Text must be atleast 10')
            setBtnDisabled(true)

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }


        setText(e.target.value)

    }
  return (
    <Card>
        <form action="">
            <h2>How would rate your service with Us? </h2>
            {/* {rating component} */}
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder='Write a review'/>
                <Button type="submit" isDisabled={btnDisable}>
                    Send
                </Button>
            </div>
            {message && <div classNamee='message'>{message}</div>}
        </form>
    </Card>
  )
}
