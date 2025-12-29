import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema as schema } from "@fullstack-voting-app/schema/index";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    errors: {
      aadharNumber: { type: "" },
    },
  });

  async function onSubmit(data) {
    try {
      const res = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const {
          error: { _errors, ...errors },
        } = await res.json();
        Object.entries(errors).forEach(([key, message]) =>
          form.setError(key, { type: "manual", message }),
        );
      }

      form.reset();
    } catch (err) {
      // Error toast already handled inside useFetch
      console.error("Signup Error:", err);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white">Create Account</h2>
        <p className="mt-2 text-center text-sm text-gray-400">Sign up to participate in voting</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Full Name
                </label>
                <input
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="age"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Age
                </label>
                <input
                  placeholder="18"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Email
                </label>
                <input
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Password
                </label>
                <input
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="address"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Address
                </label>
                <input
                  placeholder="City, State"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="aadharNumber"
            render={({ field, fieldState }) => (
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-300"
                  htmlFor={field.name}
                  data-error={!!fieldState.error}>
                  Aadhar Number
                </label>
                <input
                  placeholder="12-digit Aadhar number"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  id={field.name}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={fieldState.error && `${field.name}-error`}
                  {...field}
                />
                {fieldState.error && <p id={`${field.name}-error`}>{fieldState.error.message}</p>}
              </div>
            )}
          />

          {/* Button */}
          <button
            type="submit"
            className={`w-full rounded-lg bg-indigo-600 py-2.5 font-medium transition hover:bg-indigo-700 ${
              form.formState.isSubmitting ? "cursor-not-allowed opacity-70" : ""
            }`}
            disabled={form.formState.isValid}>
            {form.formState.isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
