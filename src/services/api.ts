import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


export interface Post {
  id: string;
  title: string;
  body: string;
  likes: number;
}

export interface User {
  _id: any;
  id: string;
  name: string;
  email: string;
  active: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get<Post[]>('/posts');
  return data;
};

export const getPost = async (id: string): Promise<Post> => {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
};

export const createPost = async (post: {
  title: string;
  content: string;
  authorId: string;
}) => {
  const res = await api.post('/posts', post);
  return res.data;
};

export const updatePost = async (
  id: string,
  post: Pick<Post, 'title' | 'body'>
): Promise<Post> => {
  const { data } = await api.put<Post>(`/posts/${id}`, post);
  return data;
};

export const likePost = async (id: string): Promise<void> => {
  await api.post(`/posts/${id}/like`);
};

export const createUser = async (user: RegisterForm): Promise<User> => {
  const { data } = await api.post<User>('/users', user);
  return data;
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>('/users');
  return data;
};

export const toggleUser = async (id: string, active: boolean): Promise<User> => {
  const { data } = await api.patch<User>(`/users/${id}`, { active });
  return data;
};

export default api;