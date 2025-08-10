"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";



export function Navbar() {

  const router = useRouter();

  const goToPolicy = () => {
    router.push("/privacy-policy");
  };

  return (
    <nav className="sticky top-0 bg-gray-900 text-white shadow-md z-50 ">
      <div className=" mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">ID Maker</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="/privacy-policy" className="hover:text-blue-600" onClick={(e) => {
            e.preventDefault(); // stop the default link behavior
            goToPolicy()
          }}>Privacy Policy</a></li>
        </ul>
      </div>
    </nav>
  );
}