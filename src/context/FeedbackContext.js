import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: `This item is from context`, rating: 10 },
    { id: 2, text: `This item is from context`, rating: 11 },
    { id: 3, text: `This item is from context`, rating: 12 },
    { id: 4, text: `This item is from context`, rating: 13 },
  ]);
  // Delete Feedback Function
  const deleteFeedback = (id) => {
    if (window.confirm(`Are sure you want to Delete`))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  //Add Feedback Function
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
