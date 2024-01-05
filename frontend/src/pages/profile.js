import React from "react";

const profile = () => {
  return (
    <div className="bg-slate-500 flex  justify-center items-center h-screen">
      <div className="flex gap-4 rounded-xl justify-center items-center flex-col bg-slate-400 h-[550px] w-96 border-4 border-slate-800">
        <p className="text-2xl font-bold">Profile</p>
        <img
          src="me.jpg"
          className="rounded-full h-16 w-16 border-4 border-slate-500"
        ></img>
        <p className="text-2xl font-bold">Amarsanaa Tumurbaatar</p>
        <div className="flex flex-col gap-4 items-center justify-center">
          <input
            placeholder="Name"
            className="rounded-full bg-slate-200 p-3 border-2 border-slate-500"
          />
          <input
            placeholder="Email"
            className="rounded-full bg-slate-200 p-3 border-2 border-slate-500"
          />
          <input
            placeholder="Password"
            className="rounded-full bg-slate-200 p-3 border-2 border-slate-500"
          />
          <input
            placeholder="Number"
            className="rounded-full bg-slate-200 p-3 border-2 border-slate-500"
          />
        </div>
        <button className="bg-blue-600 rounded-full p-4 border-2 border-slate-500 w-64">
          Send
        </button>
      </div>
    </div>
  );
};

export default profile;
