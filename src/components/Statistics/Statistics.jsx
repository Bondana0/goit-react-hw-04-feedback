import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  title,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total Feedback: {total}</li>
          <li>
            Positive Feedback Percentage:{' '}
            {isNaN(positivePercentage) ? 0 : `${positivePercentage}`}%
          </li>
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  title: PropTypes.string,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
