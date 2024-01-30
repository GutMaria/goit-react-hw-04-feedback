import { useState } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification'

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  
  const handleClick = ( option ) => {
    setState((prevState) => {
      return {...prevState, [option]: prevState[option] + 1, };
  });    
  }

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const PositiveFeedbackPercentage = Math.round(good / totalFeedback * 100);
  
  return (
    <div className="container"
      style={{
        height: '100vh',
          display: 'flex',
        flexDirection: "column",
        fontSize: 30,
        color: '#010101'
      }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleClick} />
        </Section>
        
        <Section title="Statistics">
          {totalFeedback === 0? <Notification message='There is no feedback'/> : <Statistics good={state.good}
              neutral={state.neutral}
              bad={state.bad} total={totalFeedback} positivePercentage={PositiveFeedbackPercentage}/>}
        </Section>
        
        
    </div>
  );
}

export default App;