import React from "react";
import { ThemeContext } from "./ThemeContextProvider";


const ThemeComponent = () => {
    const {theme, toggleTheme} = React.useContext(ThemeContext);


    return (
        <div className={`App ${theme}`}>
            <h1>CONTEXT API</h1>
            <button onClick={toggleTheme}>Click Me</button>
            <p>Color changed: {theme}</p>
        </div>
    );
};

export default ThemeComponent;