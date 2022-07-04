import React from 'react';
import wind from '../assets/wind.png';
import '../styles/Header.scss';

export default function Header () {
  return (
    <div className="Header">
      <img src={wind} alt="wind icon" />
      <h2>Windy</h2>
    </div>
  )
}
