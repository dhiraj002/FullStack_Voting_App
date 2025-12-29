// import { useAuth } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   console.log("protected route");

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // ⏳ Still checking auth
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  // 🔒 Not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated
  return children;
};

export default ProtectedRoute;
