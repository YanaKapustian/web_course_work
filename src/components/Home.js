import React from 'react';
import Header from './Header';
import Slider from './Slider';
import News from './News'; // Імпортуємо компонент News
import Footer from './Footer';

function Home() {
    return (
      <div className="home-container">
        <Header />
        <Slider />
        <div className="news-section">
          <h2 className="news-heading">Останні новини</h2>
          <News />
        </div>
        <Footer />
    </div>
  );
}

export default Home;
