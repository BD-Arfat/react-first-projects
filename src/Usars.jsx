import { useEffect, useState } from "react";
import { UserData } from "./UserData";

export const Usars = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>data : {users.length}</h1>
      
      {users.map((user) => (
        <UserData key={user.id} user={user} />
      ))}
    </div>
  );
};
