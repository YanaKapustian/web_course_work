import React from 'react';
import './News.css'; // Імпортуємо стилі для блоку новин
import news1 from './news1.jpg';
import news2 from './news2.jpg';

function News() {
  return (
    <div className="news-container">
      <div className="news-item">
        <img src={news1} alt="Новина 1" className="news-image" />
        <div className="news-content">
          <h3>Запуск нового лабораторного курсу</h3>
          <p>
            Наша навчальна лабораторія радо оголошує про запуск нового курсу, який допоможе студентам освоїти сучасні методи досліджень та інноваційні технології.
          </p>
        </div>
      </div>
      <div className="news-item">
        <img src={news2} alt="Новина 2" className="news-image" />
        <div className="news-content">
          <h3>Студенти презентують дослідницькі проекти</h3>
          <p>
            Студенти нашої лабораторії презентували свої дослідницькі проекти на науковій конференції та отримали високу оцінку від експертів.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;