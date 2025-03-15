import React from "react";

/* Form found in footer to email */
export function FooterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row"
      action="/subscribe"
      method="POST"
      autoComplete="on"
    >
      <input
        id="email"
        name="email"
        className="w-full p-2 mr-4 rounded-md mb-4 bg-white text-gray-900"
        type="email"
        placeholder="Enter email..."
        required
      />
      <button type="submit" className="p-2 mb-4 bg-indigo-700 text-white">
        Subscribe
      </button>
    </form>
  );
}
