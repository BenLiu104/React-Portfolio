import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState('About');
  console.log(page);
  const renderPage = () => {
    if (page === 'Portfolio') {
      return <Portfolio />;
    }
    if (page === 'Resume') {
      return <Resume />;
    } else {
      return <About />;
    }
  };

  return (
    <div>
      <Header>
        <div className="text-end">
          <div className="mx-3 p-3"> Ben Liu</div>
        </div>
        <Navigation currentPage={page} setCurrent={setPage} />
      </Header>
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
