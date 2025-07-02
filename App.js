import React from 'react';
import UserCard from './UserCard';

function App() {
  const users = [
    { name: "Nathiya", email: "nathiya@email.com" },
    { name: "Karunakaran", email: "karunakaran@email.com" },
  ];

  return (
    <div className="App">
      <h1>User Card App</h1>

      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
