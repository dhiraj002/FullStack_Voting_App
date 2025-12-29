import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl items-center gap-12 px-4 py-20 max-md:flex-col-reverse">
        {/* Left Content */}
        <div className="flex-1 max-md:text-center">
          <h1 className="text-4xl leading-tight font-bold md:text-5xl">
            Make Your Vote <br />
            <span className="text-indigo-500">Count Securely</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-400">
            A simple, secure, and transparent voting platform built with MERN. Cast your vote
            confidently and view real-time results.
          </p>

          <div className="mt-8 flex gap-4 max-sm:flex-col sm:justify-center md:justify-start">
            <Link
              to="/vote"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-center font-medium transition hover:bg-indigo-700">
              Start Voting
            </Link>

            <Link
              to="/results"
              className="rounded-lg border border-gray-700 px-6 py-3 text-center font-medium transition hover:border-indigo-500">
              View Results
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex flex-1 justify-center">
          <div className="flex size-72 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600/30 to-purple-600/10 md:size-96">
            <span className="text-6xl">🗳️</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3">
          <Feature
            title="Secure Voting"
            desc="One user, one vote. Your vote is protected using authentication."
          />
          <Feature
            title="Real-Time Results"
            desc="View live voting results with complete transparency."
          />
          <Feature
            title="Fast & Responsive"
            desc="Optimized for all devices — mobile, tablet, and desktop."
          />
        </div>
      </section>
    </main>
  );
};

const Feature = ({ title, desc }) => (
  <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:border-indigo-500">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

export default Home;
