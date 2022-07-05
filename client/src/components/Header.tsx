import React from 'react';
import { Link } from 'react-router-dom';
import wind from '../assets/wind.png';
import '../styles/Header.scss';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/" >
        <img src={wind} alt="wind icon" />
        <h2>Windy</h2>
      </Link>
    </div>
  )
}
