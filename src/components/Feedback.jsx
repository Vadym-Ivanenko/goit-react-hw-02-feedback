import { FeedbackBtn } from './FeedbackBtn';
import { FeedbackStat } from './FeedbackStat';

export const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Please leave feedback</p>
      <ul>
        <FeedbackBtn
          goodFeedback={goodFeedback}
          neutralFeedback={neutralFeedback}
          badFeedback={badFeedback}
        />
      </ul>
      <p>Statistics</p>
      <ul>
        <FeedbackStat
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </ul>
    </div>
  );
};
