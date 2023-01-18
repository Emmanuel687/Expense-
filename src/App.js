import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
const App = () => {
  const[feedback,setFeedback]=useState(FeedbackData)
  return (
    <div className="comments">
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
};
export default App;
