import React, { Dispatch, SetStateAction, useState } from 'react';
import './question-card-styles.scss';
import ScoreRank from '../score-rank/score-rank';
import Box from '../tex-box/tex-box';
import { Result } from '../../../../types';

interface Props {
  num: number;
  totalQuestions: number;
  title: string;
  questionId: string;
  questionContent: string;
  placeholder: string;
  setResponses: Dispatch<SetStateAction<string[]>>;
}

const QuestionCard: React.FC<Props> = ({
  num,
  totalQuestions,
  title,
  questionId,
  questionContent,
  placeholder,
  setResponses
}) => {
  const [addComment, setAddComment] = useState<boolean>(false);
  const [result, setResult] = useState<Result>({
    questionId,
    comment: '',
    score: 0
  });

  const handleRankingChange = (ranking: number) => {
    setResponses(prevItems => {
      const resultExist = prevItems.some(result => result === questionId);
      let newItems = prevItems;
      if (!resultExist) {
        newItems = [...prevItems, questionId];
      }
      return newItems;
    });
  };

  const handleCommentChange = (comment: string) => {
    setResult({ ...result, comment });
  };

  const onAddCommentClick = () => {
    setAddComment(!addComment);
  };

  return (
    <div className="questionCardWrapper">
      <div className="card">
        <div className="number">{`${num} of ${totalQuestions}`}</div>
        <div className="title">{title}</div>
        <div className="question">{questionContent}</div>
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
          <Box label={placeholder} handleCommentChange={handleCommentChange} />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
