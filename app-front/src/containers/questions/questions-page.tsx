import React, { useEffect, useState } from 'react';
import './questions-styles.scss';
import QuestionHeader from './components/header/question-header';
import QuestionCard from './components/question-card/question-card';
import { Question } from '../../types/question';
import AnythingCard from './components/anything-card/anything-card';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import { useGetQuestionsQuery } from '../../store/api/questionsApi';

const Questions: React.FC = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();
  const { data: questions = [] }: { data?: Question[] } = useGetQuestionsQuery();
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    if (responses.length === questions.length) {
      setIsButtonEnabled(true);
    }
  }, [responses]);

  const renderQuestions = () => {
    const questionCards = questions.map((question, index) => {
      return (
        <QuestionCard
          key={index}
          num={index + 1}
          totalQuestions={questions.length}
          title={question.title}
          questionId={question.id}
          questionContent={question.content}
          placeholder={question.commentPlaceHolder}
          setResponses={setResponses}
        />
      );
    });
    return questionCards;
  };

  return (
    <div className="questionsWrapper">
      <Sidebar />
      <QuestionHeader />
      <div className="text">Do you agree with the following statements:</div>
      {renderQuestions()}
      <AnythingCard />
      <button
        onClick={() => {
          navigate('/thanks');
        }}
        className="sendButton"
        disabled={!isButtonEnabled}
      >
        {'Send'}
      </button>
      <div className="copyright">
        <Footer />
      </div>
    </div>
  );
};

export default Questions;
