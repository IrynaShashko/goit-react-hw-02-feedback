import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsContainer, P } from './Statistics.styled';
import { H2 } from '../Feedback/Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsContainer>
    <H2>Statistics</H2>
    {good !== 0 && <P>Good: {good}</P>}
    {neutral !== 0 && <P>Neutral: {neutral}</P>}
    {bad !== 0 && <P>Bad: {bad}</P>}
    {total !== 0 && <P>Total: {total}</P>}
    {positivePercentage > 0 && <P>Positive feedback: {positivePercentage}%</P>}
    {good + neutral + bad < 1 && <P>No feedback given</P>}
  </StatisticsContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
