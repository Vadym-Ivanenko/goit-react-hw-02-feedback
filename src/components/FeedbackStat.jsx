export const FeedbackStat = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <li counter={good}>Good: {good}</li>
      <li counter={neutral}>Neutral: {neutral}</li>
      <li counter={bad}>Bad: {bad}</li>
      <li counter={total}>Total: {total}</li>
      <li counter={positivePercentage}>
        Positive feedback: {positivePercentage}%
      </li>
    </>
  );
};
