import React from "react";
const App = () => {
  const name = "Emmanuel";
  const body = "My name is Emmanul";
  const comments = [
    { id: 1, text: `Comment 1` },
    { id: 2, text: `Comment 2` },
    { id: 3, text: `Comment 3` },
  ];

  return (
    <div className="comments">
      <h1>{name.toUpperCase}</h1>
      <p>{body}</p>
      {Math.random() * 5}

      <div>
        <h3>Comments:{comments.length}</h3>
        <ul>
          {comments.map((comment,index)=>(
            <l1 key={index}>{comment.text}</l1>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
