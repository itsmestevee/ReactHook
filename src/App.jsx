import { useEffect, useState } from "react";
import "./App.css";
import { CardComponent } from "./components/CardComponent";
import { NavbarComponent } from "./components/NavbarComponent";

function App() {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://dummyjson.com/";

  async function fetchData() {
    const respone = await fetch(BASE_URL + "users");
    const data = await respone.json();
    console.log(data.users);
    setUsers(data.users);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="py-5">
        <NavbarComponent />
      </div>
      <div className="flex flex-wrap justify-center gap-7">
        {users.map((user) => (
          <div key={user?.id}>
            <CardComponent profile={user.image} lastname={user.lastName} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
