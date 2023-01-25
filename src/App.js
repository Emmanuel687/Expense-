import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import  {FeedbackProvider} from './context/FeedbackContext'
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  // Delete Function
  const deleteFeedback = (id) => {
    if (window.confirm(`Are sure you want to Delete`))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  };
  return (
    <FeedbackProvider>
    <div className="comments">
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats/>
        <FeedbackList handleDelete={deleteFeedback} />
      </div>
    </div>
    </FeedbackProvider>
    
  );
};
export default App;
