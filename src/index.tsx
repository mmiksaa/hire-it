import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import JsTask from './pages/js/JsTask/JsTask';
import JsQuestion from './pages/js/JsQuestion/JsQuestion';

import Layout from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/' element={<Layout />}>
          <Route path='/jstask' element={<JsTask />} />
          <Route path='/jsquestion' element={<JsQuestion />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
