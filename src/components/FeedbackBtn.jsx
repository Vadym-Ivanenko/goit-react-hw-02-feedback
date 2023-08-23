export const FeedbackBtn = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <>
      <li>
        <button type="button" onClick={goodFeedback}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={neutralFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={badFeedback}>
          Bad
        </button>
      </li>
    </>
  );
};
