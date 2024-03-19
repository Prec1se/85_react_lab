import React from "react";
import Navbar from "../components/navbar";
import Input from "../components/input";
import Button from "../components/button";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-yellow-100">
        <div className="rounded-xl shadow-md p-10 bg-white">
          <div>
            <div className="flex flex-col gap-y-5">
              <div className="text-center text-xl">Registration Ongoing</div>
              <Input
                type="text"
                placeholder="Name"
                className="border rounded-md p-2 border black-500"
              />
              <Input
                type="text"
                placeholder="Username"
                className="border rounded-md p-2 border black-500"
              />
              <Input
                type="password"
                placeholder="Password"
                className="border rounded-md p-2 border-black-500"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                className="border rounded-md p-2 border black-500"
              />

              <Button
                type="button"
                label="Register"
                className="bg-blue-500 text-white rounded-md p-3 hover:bg-blue-800 transition-all duration-200 ease-in-out"
              />
              <div className="flex justify-between -my-3">
                <div>Already have an account?</div>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  className="hover:underline transition-all duration-300 ease-in-out"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
