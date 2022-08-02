import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerFeedback,
  Header,
  ButtonContainer,
  H2,
  ButtonTag,
} from '../Feedback/Feedback.styled';

const Feedback = ({ onLeaveFeedback, options }) => (
  <ContainerFeedback>
    <Header>Expresso</Header>
    <H2>Please leave feedback</H2>
    <ButtonContainer>
      {options.map(option => (
        <ButtonTag
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
        >
          {option}
        </ButtonTag>
      ))}
    </ButtonContainer>
  </ContainerFeedback>
);

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Feedback;
