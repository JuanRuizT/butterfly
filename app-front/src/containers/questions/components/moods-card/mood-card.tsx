import React from 'react';
import './mood-card-styles.scss';
import { HappyIcon, NeutralIcon, UnhappyIcon, VeryHappyIcon, VeryUnhappyIcon } from '../../../../components/icons';

interface Props {
  setMood: (mood: string) => void;
}

const MoodsCard: React.FC<Props> = ({ setMood }) => {
  const handleOnClick = (selection: string): void => {
    console.log(selection);
    setMood(selection);
  };

  return (
    <div className="moodCardwrapper">
      <div className="question">Did you make a mistake? Please select your correct mood:</div>
      <div className="moods">
        <div
          onClick={() => {
            handleOnClick('5');
          }}
        >
          <VeryUnhappyIcon width={64} height={64} />
        </div>
        <div
          onClick={() => {
            handleOnClick('4');
          }}
        >
          <UnhappyIcon width={64} height={64} />
        </div>
        <div
          onClick={() => {
            handleOnClick('3');
          }}
        >
          <NeutralIcon width={64} height={64} />
        </div>
        <div
          onClick={() => {
            handleOnClick('2');
          }}
        >
          <HappyIcon width={64} height={64} />
        </div>
        <div
          onClick={() => {
            handleOnClick('1');
          }}
        >
          <VeryHappyIcon width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default MoodsCard;
