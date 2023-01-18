import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
const App = () => {
  const[feedback,setFeedback]=useState(FeedbackData);
  const deleteFeedback = (id)=>{
    if(window.confirm(`Are sure you want to Delete`))
    setFeedback(feedback.filter(item=>item.id !==id))
  }
  return (
    <div className="comments">
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
};
export default App;
