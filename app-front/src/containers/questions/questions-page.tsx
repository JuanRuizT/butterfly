import React from 'react';
import './questions-styles.scss';
import QuestionHeader from './components/header/question-header';
import QuestionCard from './components/question-card/question-card';
import { Question } from '../../types/question';
import AnythingCard from './components/anything-card/anything-card';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';

const questions: Question[] = [
  {
    id: 'q1',
    companyId: 'c1',
    title: '¿Cómo puedo hacer una lista de objetos JSON?',
    content: 'Quiero crear una lista de objetos JSON en JavaScript. ¿Cómo puedo hacerlo?',
    commentPlaceHolder: 'Escribe tu comentario aquí...'
  },
  {
    id: 'q2',
    companyId: 'c2',
    title: '¿Cuál es la diferencia entre TypeScript y JavaScript?',
    content:
      'He oído hablar de TypeScript, pero no entiendo bien cuál es la diferencia con JavaScript. ¿Alguien puede explicármelo?',
    commentPlaceHolder: 'Deja tu comentario aquí...'
  },
  {
    id: 'q3',
    companyId: 'c1',
    title: '¿Cómo puedo hacer una animación con CSS?',
    content: 'Quiero hacer una animación con CSS, pero no sé por dónde empezar. ¿Alguien me puede dar algunas indicaciones?',
    commentPlaceHolder: 'Comenta aquí...'
  }
];

const Questions: React.FC = () => {
  const navigate = useNavigate();

  const renderQuestions = () => {
    const questionCards = questions.map((question, index) => {
      return (
        <QuestionCard
          key={index}
          num={index}
          totalQuestions={questions.length}
          title={question.title}
          question={question.content}
          placeholder={question.commentPlaceHolder}
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
