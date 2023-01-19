import React from "react";
import Card from "../Data/Shared/Card";
import Button from "../Data/Shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";

export default function FeedbackForm({handleAdd}) {
  const [text, setText] = useState(``);
  const [btnDisable, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(``);
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    if (text === ``) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== `` && text.trim().length <= 10) {
      setMessage("Text must be atleast 10");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    handleAdd(newFeedback);
    setText('');

  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate your service with Us? </h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
