import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-indigo-500 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for doesnt exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/", { replace: true })}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
