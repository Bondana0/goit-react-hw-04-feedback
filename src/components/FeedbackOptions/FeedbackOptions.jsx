import React from 'react';
import PropTypes from 'prop-types';
import { Button, FlexWrapper } from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FlexWrapper>
      {options.map((option, i) => {
        return (
          <Button key={i} name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </FlexWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
