import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // 🔒 Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-300">
        Loading profile...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-950">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <h2 className="text-center text-2xl font-semibold text-white mb-6">
          My Profile
        </h2>

        {/* Profile Fields */}
        <div className="space-y-4">
          <ProfileRow label="Name" value={user.name} />
          <ProfileRow label="Email" value={user.email} />
          <ProfileRow label="Age" value={user.age} />
          <ProfileRow
            label="Role"
            value={user.role.toUpperCase()}
            highlight={user.role === "admin"}
          />
          <ProfileRow label="User ID" value={user.id} small />
        </div>

        {/* Admin Badge */}
        {user.role === "admin" && (
          <div className="mt-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-center text-emerald-400 font-medium">
            Admin Access Enabled
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value, highlight = false, small = false }) => (
  <div className="flex justify-between items-start border-b border-slate-800 pb-2">
    <span className="text-slate-400 text-sm">{label}</span>
    <span
      className={`text-right ${
        highlight ? "text-emerald-400 font-semibold" : "text-slate-200"
      } ${small ? "text-xs break-all text-slate-400" : "text-sm"}`}
    >
      {value}
    </span>
  </div>
);

export default Profile;
