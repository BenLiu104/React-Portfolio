import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState('About');

  const renderPage = () => {
    if (page === 'Portfolio') {
      return <Portfolio />;
    }
    if (page === 'About') {
      return <About />;
    }
    if (page === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  return (
    <div>
      <Header>
        <div className="text-end">
          <div className="m-3"> Ben Liu</div>
        </div>

        <Navigation currentPage={page} setCurrent={setPage} />
        {renderPage()}
      </Header>
      <Footer />
    </div>
  );
};

export default App;
