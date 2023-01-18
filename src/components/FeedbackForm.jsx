import React from 'react'
import Card from '../Shared/Card'
import { useState } from 'react';


export default function FeedbackForm() {
    const[text,setText]=useState(``);
    const handleTextChange = (e)=>{
        setText(e.target.value)

    }
  return (
    <Card>
        <form action="">
            <h2>How would rate your service with Us? </h2>
            {/* {rating component} */}
            <div className="input-group">
                <input onChange={handleText} value={text} type="text" placeholder='Write a review'/>
                <button type='submit'></button>
            </div>
        </form>
    </Card>
  )
}
