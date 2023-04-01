import React from 'react';
import './anything-card-styles.scss';
import Box from '../tex-box/tex-box';

const AnythingCard: React.FC = () => {
  return (
    <div className="anythingCardWrapper">
      <div className="card">
        <div className="title">
          <div className="question">{'Anything to add? (Optional)'}</div>
          <div className="extra">{'Extra feedback helps'}</div>
        </div>
        <Box label={'Express yourself freely and safely. This will always remain anonymous.'} />
      </div>
    </div>
  );
};

export default AnythingCard;
