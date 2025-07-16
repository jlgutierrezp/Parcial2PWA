import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // ← usá 'content' directamente
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.id) {
      alert('Usuario no encontrado');
      return;
    }

    try {
      await createPost({
        title,
        content,
        authorId: user.id,
      });
      alert('Post creado correctamente');
      navigate('/posts');
    } catch (error) {
      console.error('Error al crear el post:', error);
      alert('Error al crear el post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Post Nuevo</h1>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreatePost;

/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';

// crear un post nuevo
const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ title, content, authorId: users.id, });
    navigate('/posts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Post Nuevo</h1>
      <input
        type="texto"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreatePost; */