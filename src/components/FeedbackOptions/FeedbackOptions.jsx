import { BtnCard, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ updateGood, updateNeutral, updateBad }) => {
  return (
    <BtnCard>
      <Button type="button" onClick={updateGood}>
        Good
      </Button>
      <Button type="button" onClick={updateNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={updateBad}>
        Bad
      </Button>
    </BtnCard>
  );
};
