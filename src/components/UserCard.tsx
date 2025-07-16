import type { FC } from "react";


interface UserCardProps {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
  onToggle: (userId: string) => void;
}

const UserCard: FC<UserCardProps> = ({ id, username, email, isActive, onToggle }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        backgroundColor: isActive ? "#e6ffed" : "#ffe6e6"
      }}
    >
      <p><strong>Usuario:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Estado:</strong> {isActive ? "Activo ✅" : "Inactivo ❌"}</p>
      <button onClick={() => onToggle(id)}>
        {isActive ? "Desactivar" : "Activar"}
      </button>
    </div>
  );
};

export default UserCard;
