import React from 'react';
import './Header.css';

function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="header">
      <img src="/images/MyAlyceLogo.png" alt="Logo" className="logo" />
      <div className="profile-oval">
        <img src="/images/profile.png" alt="Profile" className="profile-pic" />
        <span className="points">239</span>
        <img src="/images/star.png" alt="Star" className="star-icon" />
      </div>
      <img src="/images/menu-btn.png" alt="Menu" className="menu-img" /> {/* Updated menu button */}
    </div>
  );
}

export default Header;
