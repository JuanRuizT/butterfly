import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoodSelection from './containers/mood-selection/mood-selection-page.tsx';
import Questions from './containers/questions/questions-page.tsx';
import Thanks from './containers/thanks/thanks-page.tsx';

const App = () => (
  <BrowserRouter>
    <div className="container main">
      <Routes>
        <Route path="/" element={<MoodSelection />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<div>The pages does not exist</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
