import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import PostList from '../pages/PostList';
import CreatePost from '../pages/CreatePost';
import PostDetail from '../pages/PostDetail';
import Users from '../pages/Users';


const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/posts" />} />
    <Route path="/register" element={<Register />} />
    <Route path="/posts" element={<PostList />} />
    <Route path="/posts/:id" element={<PostDetail />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path="/users" element={<Users />} />
  </Routes>
);

export default AppRoutes;