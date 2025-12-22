import { useState } from "react";

const mockCandidates = [
  { id: 1, name: "Alice Johnson", party: "Progressive Party" },
  { id: 2, name: "Bob Smith", party: "Unity Alliance" },
  { id: 3, name: "Carol Lee", party: "Peoples Front" },
];

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setHasVoted(true);
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Cast Your <span className="text-indigo-500">Vote</span>
          </h1>
          <p className="mt-3 text-gray-400">
            Select one candidate. You can vote only once.
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              isSelected={selectedCandidate === candidate.id}
              hasVoted={hasVoted}
              onVote={handleVote}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const CandidateCard = ({ candidate, isSelected, hasVoted, onVote }) => {
  return (
    <div
      className={`bg-gray-900 border rounded-xl p-6 transition
        ${
          isSelected
            ? "border-indigo-500"
            : "border-gray-800 hover:border-indigo-500"
        }`}
    >
      <h3 className="text-lg font-semibold">{candidate.name}</h3>
      <p className="text-sm text-gray-400 mt-1">{candidate.party}</p>

      <button
        disabled={hasVoted}
        onClick={() => onVote(candidate.id)}
        className={`mt-6 w-full py-2.5 rounded-lg font-medium transition
          ${
            hasVoted
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
      >
        {hasVoted ? (isSelected ? "Voted" : "Vote Closed") : "Vote"}
      </button>
    </div>
  );
};

export default Vote;
