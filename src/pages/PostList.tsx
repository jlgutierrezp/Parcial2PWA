import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, likePost } from '../services/api';
import type { Post } from '../services/api';


const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleLike = async (id: string) => {
    await likePost(id);
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link> - {post.likes} likes
            <button onClick={() => handleLike(post.id)}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;