import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import  {FeedbackProvider} from './context/FeedbackContext'
const App = () => {

  return (
    <FeedbackProvider>
    <div className="comments">
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList />
      </div>
    </div>
    </FeedbackProvider>
    
  );
};
export default App;
