import React from "react";

/**
 * navbar login buttons on right when not in hamburger view
 */
export function Login() {
  return (
    <div className="hidden md:flex px-4">
      <button
        type="button"
        className="bg-transparent text-black mr-4 border-none"
      >
        Sign In
      </button>
      <button type="button" className="px-8 py-3 bg-indigo-700">
        Sign Up
      </button>
    </div>
  );
}
