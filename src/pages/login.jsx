import React, { useState } from "react";
import Navbar from "../components/navbar";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const user = {
    username: "admin",
    password: "1234",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (username == user.username && password == user.password)
      Navigate("/", { state: "Login Successful!" });
    else setError("Credentials don't match!");
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-yellow-100">
        <div className="rounded-xl shadow-md p-10 bg-white">
          <div>
            <div className="flex flex-col gap-y-5">
              <div className="text-center text-xl">Welcome to Amar App</div>
              <Input
                type="text"
                placeholder="Username"
                className="border rounded-md p-2 border black-500"
                onChange={setUsername}
              />
              <Input
                type="password"
                placeholder="Password"
                className="border rounded-md p-2 border-black-500"
                onChange={setPassword}
              />
              <Button
                type="button"
                label="Login"
                className="bg-blue-500 text-white rounded-md p-3 hover:bg-blue-800 transition-all duration-200 ease-in-out"
                onClick={login}
              />
              <div className="text-red-900">{error}</div>
              <div className="flex justify-between -my-3">
                <div>No account yet?</div>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                  className="hover:underline transition-all duration-300 ease-in-out"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
