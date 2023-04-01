import React, { useState } from 'react';
import './question-card-styles.scss';
import ScoreRank from '../score-rank/score-rank';
import Box from '../tex-box/tex-box';

interface Props {
  num: number;
  totalQuestions: number;
  title: string;
  question: string;
  placeholder: string;
}

const QuestionCard: React.FC<Props> = ({ num, totalQuestions, title, question, placeholder }) => {
  const [addComment, setAddComment] = useState<boolean>(false);
  const handleRankingChange = (ranking: number) => {
    console.log(`Ranking changed to ${ranking}`);
  };

  const onAddCommentClick = () => {
    setAddComment(!addComment);
  };

  return (
    <div className="questionCardWrapper">
      <div className="card">
        <div className="number">{`${num} of ${totalQuestions}`}</div>
        <div className="title">{title}</div>
        <div className="question">{question}</div>
        <div className="score">
          <ScoreRank onRatingChange={handleRankingChange} />
        </div>
        <div className="agree">
          <div className="left">Disagree</div>
          <div className="right">Agree</div>
        </div>
        {!addComment ? (
          <div onClick={onAddCommentClick} className="comment">
            Add comment
          </div>
        ) : (
          <Box label={placeholder} />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
