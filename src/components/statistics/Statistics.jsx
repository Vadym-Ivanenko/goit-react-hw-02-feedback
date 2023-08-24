import { List, Items } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Items counter={good}>Good: {good}</Items>
      <Items counter={neutral}>Neutral: {neutral}</Items>
      <Items counter={bad}>Bad: {bad}</Items>
      <Items counter={total}>Total: {total}</Items>
      <Items counter={positivePercentage}>
        Positive feedback: {positivePercentage}%
      </Items>
    </List>
  );
};
