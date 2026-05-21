import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">

      {/* Glass Card */}
      <div className="w-full max-w-md bg-card border border-gray-800 rounded-2xl p-8 shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Login to eStore
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

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
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-primary cursor-pointer">
            Register
          </span>
        </p>

      </div>
    </div>
  );
}