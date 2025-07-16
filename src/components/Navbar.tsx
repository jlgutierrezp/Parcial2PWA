import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar: React.FC = () => (
  <nav>
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/create">Create Post</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;