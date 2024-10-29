import { useState } from "react";

function App() {
    const[showPassword, setShowPassword] = useState(false);
    const handleShowHide = () => {
        setShowPassword(!showPassword)
    }
    return(

        <div id="password-container">
            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter password"></input>
            <button onClick={handleShowHide} id="myButton">
                {showPassword ? "🙈" : "`👀`'"}</button>
        </div>

    );
}
export default App