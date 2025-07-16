import React, { useEffect, useState } from 'react';
import { getUsers, toggleUser } from '../services/api';
import type { User } from '../services/api';


const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleToggle = async (user: User) => {
    await toggleUser(user.id, !user.active);
    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, active: !u.active } : u))
    );
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.active ? 'Active' : 'Inactive'}
            <button onClick={() => handleToggle(user)}>
              {user.active ? 'Deactivate' : 'Activate'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;