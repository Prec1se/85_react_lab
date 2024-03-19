import logo from "./logo.svg";
import AddButton from "./components/addButton";
import TaskManager from "./components/taskmanager";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          
        </Routes>
      </BrowserRouter> */}
      {/* <AddButton /> */}
      <TaskManager/>
    </div>
  );
}

export default App;
