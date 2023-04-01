import React from 'react';
import './mood-selector-styles.scss';
import { HappyIcon, NeutralIcon, UnhappyIcon, VeryHappyIcon, VeryUnhappyIcon } from '../../../../components/icons';

const MoodSelector: React.FC = () => (
  <>
    <div className="wrapper">
      <div className="title">
        <span className="companyName">DEMO INC. </span>would like to know
      </div>
      <div className="question">{'How is your week going?'}</div>
      <div className="moods">
        <VeryHappyIcon width={82} height={82} />
        <HappyIcon width={82} height={82} />
        <NeutralIcon width={82} height={82} />
        <UnhappyIcon width={82} height={82} />
        <VeryUnhappyIcon width={82} height={82} />
      </div>
      <div className="anonymous">{'Your answer will always remain anonymous'}</div>
    </div>
  </>
);

export default MoodSelector;
