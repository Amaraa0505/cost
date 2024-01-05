import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4 items-center bg-white p-4 ml-28 ">
      <div className="flex items-center gap-4">
        <img src="header.svg"></img>
        <button
          onClick={() => router.push("/")}
          className="hover:font-semibold"
        >
          Dashboard
        </button>
        <button
          className="hover:font-semibold"
          onClick={() => router.push("./records")}
        >
          Records
        </button>
      </div>
      {/* <button onClick={() => router.push("/signup")}>signup</button> */}
      <img
        src="me.jpg"
        className="rounded-full w-12 h-12 border-slate-400 border-2 ml-[800px]"
        onClick={() => router.push("./profile")}
      ></img>
      <button className="bg-blue-600 rounded-full p-3 text-white ">
        + Record
      </button>
    </div>
  );
};

export default Header;
