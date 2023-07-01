"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 shadow-md">
      <div className="text-gray-800 text-xl font-semibold dark:text-white">
        <span>Factory Management System</span>
      </div>
      <div>
        <nav className="mt-10">
          <Link href="/" passHref>
            <div className="flex items-center px-6 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="mx-4">Dashboard</span>
            </div>
          </Link>
          <Link href="/products" passHref>
            <div className="flex items-center mt-5 px-6 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="mx-4">Products</span>
            </div>
          </Link>
          <Link href="/orders" passHref>
            <div className="flex items-center mt-5 px-6 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="mx-4">Orders</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
