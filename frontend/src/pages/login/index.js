import React from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserProvider";
import { useContext } from "react";
import { Logo } from "../../components/Logos";

const login = () => {
  const { formUserData, changeFormUserData, login, loading } =
    useContext(UserContext);
  const router = useRouter();
  return (
    <div className="flex h-screen">
      <div className="flex-1 mt-44 ">
        <div className="flex items-center justify-center mb-6">
          <img src="/header.svg"></img>
          <p className="font-semibold">Geld</p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <p className="font-semibold">Welcome back</p>
          <p>Welcome back, please enter your details</p>
        </div>
        <div className="flex flex-col gap-4 items-center mt-4">
          <input
            type="text"
            name="email"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.email}
            placeholder="Email"
            className="bg-slate-100 rounded-xl w-72 h-10 p-2"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.password}
            placeholder="Password"
            className="bg-slate-100 rounded-xl w-72 h-10 p-2"
          />
          <button
            onClick={login}
            disabled={loading}
            className="bg-blue-600 rounded-xl p-2 w-72"
          >
            Log in
          </button>
          <div className="flex gap-2 mt-4">
            <p>Don't have account?</p>
            <button
              className="text-blue-600"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blue-600"></div>
    </div>
  );
};

export default login;
