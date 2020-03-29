import React, { useState } from 'react';
import './index.css';

export default ({ onClickHandler }) => {
  const [position, resetPosition] = useState('center');
  return (
    <div className={`avatar ${position}`}>
      <img alt="" onClick={() => { resetPosition(''); onClickHandler(); }}>
      </img>
    </div >
  )
};