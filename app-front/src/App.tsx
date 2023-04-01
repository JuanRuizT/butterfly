import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoodSelection from './containers/mood-selection/mood-selection-page';
import Questions from './containers/questions/questions-page';
import Thanks from './containers/thanks/thanks-page';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container main">
        <Routes>
          <Route path="/" element={<MoodSelection />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<div>The pages does not exist</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
