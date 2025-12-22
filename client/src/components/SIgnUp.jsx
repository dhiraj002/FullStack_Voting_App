// import { Link } from "react-router-dom";
// import { useState } from "react";
// import useFetch from "../hooks/useFetch";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     email: "",
//     password: "",
//     address: "",
//     aadharNumber: "",
//   });

//   const { loading, error, fetchData } = useFetch(
//     "http://localhost:4000/api/users/signup",
//     { method: "POST" },
//     false
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", formData);
//     fetchData(formData);
//     // console.log("Response Data:", data);

//     setFormData({
//       name: "",
//       age: "",
//       email: "",
//       password: "",
//       address: "",
//       aadharNumber: "",
//     });
//     // TODO: API call here
//   };

//   return (
//     <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8">
//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-white text-center">
//           Create Account
//         </h2>
//         <p className="text-gray-400 text-sm text-center mt-2">
//           Sign up to participate in voting
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               required
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Age */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Age
//             </label>
//             <input
//               type="number"
//               min="18"
//               name="age"
//               value={formData.age}
//               required
//               onChange={handleChange}
//               placeholder="18"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               required
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Address
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               required
//               onChange={handleChange}
//               placeholder="City, State"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Aadhar Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Aadhar Number
//             </label>
//             <input
//               type="text"
//               name="aadharNumber"
//               value={formData.aadharNumber}
//               required
//               onChange={handleChange}
//               placeholder="12-digit Aadhar number"
//               maxLength="12"
//               minLength="12"
//               className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium"
//             disabled={loading}
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="mt-6 text-center text-sm text-gray-400">
//           Already have an account?{" "}
//           <Link to="/login" className="text-indigo-400 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default SignUp;

import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    address: "",
    aadharNumber: "",
  });

  const { loading, fetchData } = useFetch(
    "http://localhost:4000/api/users/signup",
    { method: "POST" },
    false
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchData(formData);
      // If success, reset form
      if (result && result.success) {
        setFormData({
          name: "",
          age: "",
          email: "",
          password: "",
          address: "",
          aadharNumber: "",
        });
      }
    } catch (err) {
      // Error toast already handled inside useFetch
      console.error("Signup Error:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white text-center">
          Create Account
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2">
          Sign up to participate in voting
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Age
            </label>
            <input
              type="number"
              min="18"
              name="age"
              value={formData.age}
              required
              onChange={handleChange}
              placeholder="18"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              required
              onChange={handleChange}
              placeholder="City, State"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Aadhar Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Aadhar Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              required
              onChange={handleChange}
              placeholder="12-digit Aadhar number"
              maxLength="12"
              minLength="12"
              className="w-full px-4 py-2 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={`w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
