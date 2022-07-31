import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerFeedback,
  Header,
  ButtonContainer,
  H2,
  ButtonTag,
} from '../Feedback/Feedback.styled';

const Feedback = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
  <ContainerFeedback>
    <Header>Expresso</Header>
    <H2>Please leave feedback</H2>
    <ButtonContainer>
      <ButtonTag type="button" onClick={onIncrementGood} name="Good">
        Good
      </ButtonTag>
      <ButtonTag type="button" onClick={onIncrementNeutral} name="Neutral">
        Neutral
      </ButtonTag>
      <ButtonTag type="button" onClick={onIncrementBad} name="Bad">
        Bad
      </ButtonTag>
    </ButtonContainer>
  </ContainerFeedback>
);

Feedback.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};

export default Feedback;
