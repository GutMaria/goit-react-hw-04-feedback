import { Component } from "react";
// import PropTypes from 'prop-types';
import css from './feedback-options.module.css';



class FeedbackOptions extends Component {

  render() {
    const { options, onLeaveFeedback } = this.props;
    
    const buttonElements = options.map(option => (<button key={option} type="button" className={css.btn}
      onClick={() => onLeaveFeedback(option)}>{option}</button>));
  
    return (
      <div>
          {buttonElements}
        </div>
      
    )
  }
}

export default FeedbackOptions;