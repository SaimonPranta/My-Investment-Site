import { createContext, useEffect, useState } from 'react';
import './App.css';
import Routess from './Routes/Routess';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({})





  useEffect(() => {
    const cooki = document.cookie.split("=")[1];
    if (cooki) {
      fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization: `Bearer ${cooki}`
        }
      }).then(res => res.json())
        .then(data => {
          data.password = null
          setUser(data);
        })
    }
  }, []);
  console.log(user)

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Routess />
      </userContext.Provider>
    </div>
  );
}

export default App;
