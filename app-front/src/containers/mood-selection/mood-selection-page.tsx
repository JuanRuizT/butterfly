import React from 'react';
import './mood-selection-styles.scss';
import Header from './components/header/header';
import MoodSelector from './components/mood-selector/mood-selector';
import Footer from './components/footer/footer';

const MoodSelection: React.FC = () => (
  <div className="warperMood">
    <div className="content">
      <Header />
      <MoodSelector />
      <Footer />
    </div>
  </div>
);

export default MoodSelection;
