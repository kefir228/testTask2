'use client'
import CartModal from "./CardModal";
import { redirect } from "next/navigation";

export default function Header() {
  return (
    <header className="relative p-4 bg-gray-800 text-white flex justify-around">
      <h1 className="font-bold cursor-pointer" onClick={()=>{redirect('/categories')}}>Fake Store</h1>
      <CartModal />
    </header>
  );
}
