import React from 'react';
import { useState } from 'react';
function FeedbackItem() {
    const[rating,setRating]=useState(7);
    const[text,setText]=useState(`This is an example of feedbackItem`);

    const handleSubmit = ()=>{
        setRating((prev)=>prev+10);
      


        setText(`Updated DOM `)
    }


  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">
            {text}
        </div>
        <button onClick={handleSubmit}>Button</button>
    </div>
  )
}

export default FeedbackItem