import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 text-center">
        <h1 className="mb-4 text-7xl font-extrabold text-indigo-500">404</h1>

        <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-gray-400">
          The page you are looking for doesnt exist or has been moved.
        </p>

        <Link
          to="/"
          replace
          className="w-full rounded-lg bg-indigo-600 py-3 font-medium transition duration-200 hover:bg-indigo-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
