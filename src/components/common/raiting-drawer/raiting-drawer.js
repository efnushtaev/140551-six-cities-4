import React from 'react';

const RaitingDrawer = ({rating}) => {
  const _calculateRaiting = (r) => {
    return 20 * r;
  };
  return <span style={{width: `${_calculateRaiting(rating)}%`}}></span>
}

export default RaitingDrawer