import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoodSelection from './containers/mood-selection/mood-selection-page';
import Questions from './containers/questions/questions-page';
import Thanks from './containers/thanks/thanks-page';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
export default App;
