import { List, Btn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <List>
      <li>
        <Btn type="button" onClick={goodFeedback}>
          Good
        </Btn>
      </li>
      <li>
        <Btn type="button" onClick={neutralFeedback}>
          Neutral
        </Btn>
      </li>
      <li>
        <Btn type="button" onClick={badFeedback}>
          Bad
        </Btn>
      </li>
    </List>
  );
};
