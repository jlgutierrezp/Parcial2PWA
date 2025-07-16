import type { FC } from "react";


interface PostCardProps {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  onLike: (postId: string) => void;
  onClick?: () => void;
}

const PostCard: FC<PostCardProps> = ({ id, title, content, author, likes, onLike, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>Autor:</strong> {author}</p>
      <p><strong>Likes:</strong> {likes}</p>
      <button onClick={(e) => { e.stopPropagation(); onLike(id); }}>
        👍 Dar Like
      </button>
    </div>
  );
};

export default PostCard;
