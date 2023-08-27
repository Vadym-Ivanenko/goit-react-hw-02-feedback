import { List, Btn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, feedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li>
            <Btn
              type="button"
              key={option}
              onClick={() => {
                feedback(option);
              }}
            >
              {option}
            </Btn>
          </li>
        );
      })}
    </List>
  );
};
