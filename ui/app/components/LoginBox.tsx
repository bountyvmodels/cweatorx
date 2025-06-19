"use client";

import { useState } from "react";

export default function LoginBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
    // TODO: Replace with actual login logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 mb-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
      >
        Log In
      </button>
    </form>
  );
}
