import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];


  const onLeaveFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };


  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };


  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / totalFeedback()) * 100;
    return Math.round(positivePercentage);
  };

  return (
    <div>
      <h1>Feedback App</h1>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={evt => onLeaveFeedback(evt)}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
