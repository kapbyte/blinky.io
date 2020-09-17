import React from 'react';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon"  alt="close image" />
      <h3>{ room }</h3>
    </div>
    <div className="RightInnerContainer">
      <a href="/"><img  alt="close image" /></a>
      
    </div>
  </div>
)

export default InfoBar;