import { useState } from "react";
import "./App.css";

function App() {
  const [cookie, setCookie] = useState(null);

  const handleClick = async () => {
    const res = await fetch("https://cookie-sep.onrender.com", {
      credentials: "include",
    });
    const data = await res.json();

    setCookie(await data.message);
  };

  return (
    <>
      <button onClick={handleClick}>Get cookie</button>
      <p>The cookie is = {cookie}</p>
    </>
  );
}

export default App;
