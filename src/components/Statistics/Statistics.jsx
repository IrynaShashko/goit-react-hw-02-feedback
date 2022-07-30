import React, { Component } from 'react';
import { StatisticsContainer, P } from './Statistics.styled';
import { H2 } from '../Feedback/Feedback.styled';

class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
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
      <StatisticsContainer>
        <H2>Statistics</H2>
        {this.state.good !== 0 && <P>Good: {this.state.good}</P>}
        {this.state.neutral !== 0 && <P>Neutral: {this.state.neutral}</P>}
        {this.state.bad !== 0 && <P>Bad: {this.state.bad}</P>}
        {this.countTotalFeedback() !== 0 && (
          <P>Total: {this.countTotalFeedback()}</P>
        )}
        {this.countPositiveFeedbackPercentage() > 0 && (
          <P>Positive feedback: {this.countPositiveFeedbackPercentage()}%</P>
        )}
        {this.countTotalFeedback() < 1 && <P>No feedback given</P>}
      </StatisticsContainer>
    );
  }
}

export default Statistics;
