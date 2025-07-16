import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, updatePost } from '../services/api';
import type { Post } from '../services/api';


const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      getPost(id).then(setPost);
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (post) {
      const { name, value } = e.target;
      setPost({ ...post, [name]: value });
    }
  };

  const handleUpdate = async () => {
    if (post && id) {
      await updatePost(id, { title: post.title, body: post.body });
      alert('Post updated');
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>Post Detail</h1>
      <input name="title" value={post.title} onChange={handleChange} />
      <textarea name="body" value={post.body} onChange={handleChange} />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
};

export default PostDetail;