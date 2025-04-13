import { useState } from "react";
import "./App.css";
import SplashScreen from './dark_splash_screen.jsx'

function App() {
  const [count, setCount] = useState(0);
  const time = new Date();
  const time_dics = {
         hour: time.getHours(),
         sec: time.getSeconds(),
         min: time.getMinutes()
     }
  return (
    <div>{"i am comming"}
      <SplashScreen /> 
     </div>
    );
  
}

export default App;
