import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Cards from "@/components/Cards";
import Base from "@/components/Base";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBeer, FaHome } from "react-icons/fa";
import { UserContext } from "../../src/context/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="bg-slate-200">
        <Cards />
        <Base />
      </div>
    </div>
  );
}
