import React, { useState } from "react";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const apiUrl = process.env.REACT_APP_BACKEND;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const login = async () => {
    console.log(formData);
    let responseDate;
    await fetch(apiUrl + "/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseDate = data;
      });
    if (responseDate.success) {
      localStorage.setItem("auth-token", responseDate.token);
      window.location.replace("/");
    } else {
      alert(responseDate.message);
    }
  };
  const signup = async () => {
    console.log(formData);
    let responseDate;
    await fetch(apiUrl + "/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseDate = data;
      });
    if (responseDate.success) {
      localStorage.setItem("auth-token", responseDate.token);
      window.location.replace("/");
    } else {
      alert(responseDate.message);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center h-screen font-pops">
      <div className="w-96">
        <h1 className="text-4xl font-bold text-center mb-8">{state}</h1>
        <form>
          <div className="mb-4">
            {state === "Sign Up" ? (
              <input
                type="text"
                name="username"
                className="w-full border-2 border-gray-300 p-2"
                value={formData.username}
                onChange={changeHandler}
                placeholder="Your Name"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full border-2 border-gray-300 p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="w-full border-2 border-gray-300 p-2"
              placeholder="Your Password"
            />
          </div>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>
          {state === "Sign up" ? (
            <p className="mt-4">
              Already have an account?{" "}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => {
                  setState("Login");
                }}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="mt-4">
              Create an account?{" "}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Click Here
              </span>
            </p>
          )}
          <div className="mt-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginSignup;
