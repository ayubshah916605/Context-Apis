import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import ThemeContextProvider, { ThemeContext } from "./contextapis/ThemeContextProvider";
import ThemeComponent from "./contextapis/ThemeComponent";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <UserContextProvider>
      <h1>Practice context API</h1>
       <Login />
       <Profile />
    </UserContextProvider>
    <ThemeContextProvider>
       <h1>Practice Light to Dark</h1>
       <ThemeComponent />
    </ThemeContextProvider>
    
    </>
  );
}

export default App;
