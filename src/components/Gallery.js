import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <div className="page-container">
      <h2>Галерея картинок</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="gallery1.jpg" alt="Gallery 1" />
        </div>
        <div className="col-md-4">
          <img src="gallery2.jpg" alt="Gallery 2" />
        </div>
        <div className="col-md-4">
          <img src="gallery3.jpg" alt="Gallery 3" />
        </div>
        <div className="col-md-4">
          <img src="gallery4.jpg" alt="Gallery 4" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
