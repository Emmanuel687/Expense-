import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </div>
  );
}
FeedbackItem.PropTypes ={
  feedback:PropTypes.arrayOf(
    PropTypes.shape(
      {
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,

      }
    )
  )
}


export default FeedbackList;
