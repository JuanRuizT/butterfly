// src/components/Rating.tsx

import React, { useState } from 'react';
import './score-rank-styles.scss';
import { StarIcon } from '../../../../components/icons';

interface Props {
  onRatingChange: (rating: number) => void;
}

const setBackgroundColor = (rating: number) => {
  switch (rating) {
    case 1:
    case 2:
      return 'veryUnhappy';
    case 3:
    case 4:
      return 'unhappy';
    case 5:
    case 6:
      return 'neutral';
    case 7:
    case 8:
      return 'happy';
    case 9:
    case 10:
      return 'veryHappy';
    default:
      return '';
  }
};

const Rating: React.FC<Props> = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleStarClick = (rating: number) => {
    setSelectedStar(rating);
    onRatingChange(rating);
  };

  const handleMouseEnter = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleMouseLeave = () => {
    setSelectedRating(selectedStar);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 10; i++) {
      stars.push(
        <div
          key={i}
          className={`star selected ${selectedRating >= i ? setBackgroundColor(i) : ''}`}
          onClick={() => {
            handleStarClick(i);
          }}
          onMouseEnter={() => {
            handleMouseEnter(i);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
          data-index={i}
        >
          {/* <StarIcon color={`${selectedStar >= i ? ' #c3c3c3' : ''}`} /> */}
          <div className="starIcon">
            <StarIcon />
          </div>
        </div>
      );
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
