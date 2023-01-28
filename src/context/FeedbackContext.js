// import { createContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState([
//     {
//       id: 1,
//       text: "This is feedback item 1",
//       rating: 10,
//     },
//     {
//       id: 2,
//       text: "This is feedback item 2",
//       rating: 7,
//     },
//     {
//       id: 3,
//       text: "This is feedback item 1",
//       rating: 11,
//     },
//   ]);
//   const [feedbackEdit, setFeedbackEdit] = useState({
//     item: {},
//     edit: false,
//   });



//   //Update Feedback Function
//   const updateFeedback = (id, updItem) => {
//     setFeedback(
//       feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
//     );
//   };
//   // Delete Feedback Function
//   const deleteFeedback = (id) => {
//     if (window.confirm(`Are sure you want to Delete`))
//       setFeedback(feedback.filter((item) => item.id !== id));
//   };
//   //Add Feedback Function
//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback([newFeedback, ...feedback]);
//   };

//   //Set item to be updated
//   const editFeedback = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     });
//   };
//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         feedbackEdit,
//         deleteFeedback,
//         addFeedback,
//         editFeedback,
//         updateFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };

// export default FeedbackContext;
