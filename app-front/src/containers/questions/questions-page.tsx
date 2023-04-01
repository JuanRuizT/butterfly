import React from 'react';
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
  const navigate = useNavigate();

  const { data: questions = [] }: { data?: Question[] } = useGetQuestionsQuery();

  const renderQuestions = () => {
    const questionCards = questions.map((question, index) => {
      return (
        <QuestionCard
          key={index}
          num={index}
          totalQuestions={questions.length}
          title={question.title}
          questionId={question.id}
          questionContent={question.content}
          placeholder={question.commentPlaceHolder}
        />
      );
    });
    return questionCards.sort(() => Math.random() - 0.5);
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
