import React from 'react';

const PropertyGallery = ({images}) => {
  return <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.map((el) => {
        return <div key={el} className="property__image-wrapper">
          <img className="property__image" src={el} alt="Photo studio"/>
        </div>
      })}
      
    </div>
  </div>;
};

export default PropertyGallery;
