import React from 'react';

// const navItem = (link, page, text) => {

// }

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a 
          href='#aboutme'
          onClick={() => handlePageChange('AboutMe')}
          >
            About Me
          </a>
      </li>
      <li className='nav-item'>
        <a 
          href='#portfolio'
          onClick={() => handlePageChange('Portfolio')}
          >
            Portfolio
          </a>
      </li>
      <li className='nav-item'>
        <a 
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
      </li>
      <li className='nav-item'>
        <a 
          href='#resume'
          onClick={() => handlePageChange('Resume')}
          >
            Resume
          </a>
      </li>
    </ul>
  );
}
