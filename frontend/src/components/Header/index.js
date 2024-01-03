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
      <button className="bg-blue-600 rounded-full p-3 text-white ml-[880px]">
        + Record
      </button>
    </div>
  );
};

export default Header;
