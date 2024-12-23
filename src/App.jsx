import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:<correct-port>/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <h2>User Server</h2>
      <h3>Number of Users: {user.length} </h3>
      <div>
        {
         users.map(user => <p key={user.id}>   {user.id}. Name:{user.name} </p>)
        }
      </div>
    </>
  );
}

export default App;
