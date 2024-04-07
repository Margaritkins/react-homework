import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section>
      <nav>
        <ul>
          
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/todo'>Todo</Link></li>
          
        </ul>
      </nav>
      
    </section>
  );
}

export default Header;
