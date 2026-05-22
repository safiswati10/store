import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">

      {/* Card */}
      <div className="w-full max-w-md bg-card border border-gray-800 rounded-2xl p-8 shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Create eStore Account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-dark border border-gray-700 rounded-full px-4 py-3 text-white outline-none focus:border-primary"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-dark border border-gray-700 rounded-full px-4 py-3 text-white outline-none focus:border-primary"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-dark border border-gray-700 rounded-full px-4 py-3 text-white outline-none focus:border-primary"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-black font-semibold py-3 rounded-full hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}