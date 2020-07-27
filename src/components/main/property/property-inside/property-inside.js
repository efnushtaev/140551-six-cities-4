import React from 'react';

const PropertyInside = ({goods}) => {
  return <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {goods.map((el) => {
        return <li key={el} className="property__inside-item">{el}</li>
      })}
    </ul>
  </div>;
};

export default PropertyInside;
