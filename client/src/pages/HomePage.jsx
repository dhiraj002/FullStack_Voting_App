import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make Your Vote <br />
            <span className="text-indigo-500">Count Securely</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            A simple, secure, and transparent voting platform built with MERN.
            Cast your vote confidently and view real-time results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <Link
              to="/vote"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium text-center"
            >
              Start Voting
            </Link>

            <Link
              to="/results"
              className="px-6 py-3 rounded-lg border border-gray-700 hover:border-indigo-500 transition font-medium text-center"
            >
              View Results
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-linear-to-br from-indigo-600/30 to-purple-600/10 flex items-center justify-center">
            <span className="text-6xl">🗳️</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
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
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default Home;
