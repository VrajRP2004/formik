import Login from "./components/Login";
import Singup from "./components/Signup";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Singup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
