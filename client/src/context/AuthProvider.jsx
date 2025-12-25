import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

import { toast } from "react-toastify";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/users/profile", {
        credentials: "include",
      });

      // 🚫 Expected case → NOT logged in
      if (res.status === 401) {
        setUser(null);
        return;
      }

      if (!res.ok) return;

      const data = await res.json();
      setUser(data.user); // backend returns user object directly
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error fetching user profile:", error.messsage);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/users/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        toast.error("Error logging out");
        return;
      }

      const data = await res.json();

      toast.success(data.message || "Logged out successfully");

      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      toast.error(error?.message || "Error logging out");
    }
  };

  useEffect(() => {
    fetchUserProfile(); // run ONCE
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn,
        fetchUserProfile,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
