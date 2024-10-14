"use client";

import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-900 flex justify-between px-24 text-white py-3">
      <h1>NextGoogle</h1>

      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            {session.user.name} {session.user.email}
          </p>
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <button onClick={() => signOut()} className="bg-red-400 px-3 rounded">
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-sky-500 px-3 rounded">
          Sign In
        </button>
      )}
    </nav>
  );
};
