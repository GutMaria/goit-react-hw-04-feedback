import css from './feedback-options.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElements = options.map(option => (<button key={option} type="button" className={css.btn}
      onClick={() => onLeaveFeedback(option)}>{option}</button>));
  
    return (
      <div>
          {buttonElements}
        </div>
    )
}

export default FeedbackOptions;