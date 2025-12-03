import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Bookshop from './components/Bookshop';
import BookDetails from './components/BookDetails';
import ChapterDetails from './components/ChapterDetails';
import RecordDetails from './components/RecordDetails';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Bookshop />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/book/:bookId/chapter/:chapterId" element={<ChapterDetails />} />
        <Route path="/record/:recordId" element={<RecordDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
