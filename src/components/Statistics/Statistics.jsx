import { StatisticItem, StatisticList } from './Statistics.styled';

export const Statistics = ({ total, positiveFeedback, good, bad, neutral }) => {
  return (
    <StatisticList>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positiveFeedback}%</StatisticItem>
    </StatisticList>
  );
};
