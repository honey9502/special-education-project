import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      background: '#2c3e50',
      color: 'white',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>특수학급 교육 애플리케이션</h1>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1rem'
        }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>홈</Link></li>
          <li><Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>사용자</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;