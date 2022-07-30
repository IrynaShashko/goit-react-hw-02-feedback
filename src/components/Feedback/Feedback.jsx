import React from 'react';
import {
  ContainerFeedback,
  Header,
  ButtonContainer,
  H2,
  ButtonTag,
} from '../Feedback/Feedback.styled';

const Feedback = ({
  onHandleIncrementGood,
  onHandleIncrementNeutral,
  onHandleIncrementBad,
}) => (
  <ContainerFeedback>
    <Header>Expresso</Header>
    <H2>Please leave feedback</H2>
    <ButtonContainer>
      <ButtonTag type="button" onClick={onHandleIncrementGood} name="Good">
        Good
      </ButtonTag>
      <ButtonTag
        type="button"
        onClick={onHandleIncrementNeutral}
        name="Neutral"
      >
        Neutral
      </ButtonTag>
      <ButtonTag type="button" onClick={onHandleIncrementBad} name="Bad">
        Bad
      </ButtonTag>
    </ButtonContainer>
  </ContainerFeedback>
);

export default Feedback;
