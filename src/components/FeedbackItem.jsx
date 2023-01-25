import React from "react";
import Card from "../Data/Shared/Card";
import {FaTimes,FaEdit} from 'react-icons/fa';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";



function FeedbackItem({ item }) {
  const{deleteFeedback,editFeedback}=useContext(FeedbackContext)
 
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>deleteFeedback(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="edit">
        <FaEdit color="purple" onClick={()=>editFeedback(item)}></FaEdit>
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
