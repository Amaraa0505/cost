import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Logo } from "../../components/Logos";
import { UserContext } from "@/context/UserProvider";
const signup = () => {
  const { loading, signup, formUserData, changeFormUserData } =
    useContext(UserContext);
  const router = useRouter();
  return (
    <div className="flex h-screen">
      <div className="flex-1 justify-center mt-44">
        <div className="flex items-center justify-center">
          <img src="header.svg"></img>
          <p className="font-semibold">Geld</p>
        </div>
        <div className="my-8 flex flex-col items-center">
          <p>Create Geld acount</p>
          <p>Sign up below to create your Wallet account</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <input
            type="text"
            name="name"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.name}
            placeholder="Name"
            className="rounded-xl bg-slate-100 w-72 p-2 h-10"
          />
          <input
            type="text"
            name="email" ///role of name
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.email}
            placeholder="Email"
            className="rounded-xl bg-slate-100 w-72 p-2 h-10"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.password}
            placeholder="Password"
            className="rounded-xl bg-slate-100 w-72 p-2 h-10"
          />
          <input
            type="password"
            name="rePassword"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.rePassword}
            placeholder="Repassword"
            className="rounded-xl bg-slate-100 w-72 p-2 h-10"
          />
          <button
            onClick={signup}
            disabled={loading} ///
            className="bg-blue-600 rounded-xl p-2 w-72"
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center mt-4">
          <p>Already have account?</p>
          <button
            className="text-blue-600"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
        </div>
      </div>
      <div className="bg-blue-600 flex-1">2</div>
    </div>
  );
};
export default signup;
