import React, { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import { Container, CardContainer } from '../App/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positiveFeedback;
  };

  render() {
    return (
      <Container>
        <CardContainer>
          <Feedback
            onLeaveFeedback={this.handleClick}
            options={Object.keys(this.state)}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </CardContainer>
      </Container>
    );
  }
}
export default App;
