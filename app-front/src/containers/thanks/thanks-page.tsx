import React, { useEffect, useState } from 'react';
import './thanks-styles.scss';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import { OkIcon } from '../../components/icons';
import { useNavigate } from 'react-router-dom';

const Thanks: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Redirect to Home');
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="thanksWrapper">
      <Sidebar />
      <div className="card">
        <div className="icon">
          <OkIcon />
        </div>
        <div className="thanksMessage">Thank You!</div>
        <div className="message">Your feedback has been sent. </div>
        <div className="message">Have a lovely day.</div>
      </div>
      <div>
        <div className="thanksFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
