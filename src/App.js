import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
const App = () => {
  return (
    <div className="comments">
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </div>
  );
};
export default App;
