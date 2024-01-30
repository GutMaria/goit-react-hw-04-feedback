import { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  handleClick = ( option ) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });    
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
    <div className="container"
      style={{
        height: '100vh',
          display: 'flex',
        flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>
        
        <Section title="Statistics">
          {totalFeedback === 0? <Notification message='There is no feedback'/> : <Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad} total={totalFeedback} positivePercentage={PositiveFeedbackPercentage}/>}
        </Section>
        
        
    </div>
  );
  }
};


export default App;

//  