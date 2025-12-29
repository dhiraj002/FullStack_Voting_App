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
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Cast Your <span className="text-indigo-500">Vote</span>
          </h1>
          <p className="mt-3 text-gray-400">Select one candidate. You can vote only once.</p>
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
      className={`rounded-xl border bg-gray-900 p-6 transition ${
        isSelected ? "border-indigo-500" : "border-gray-800 hover:border-indigo-500"
      }`}>
      <h3 className="text-lg font-semibold">{candidate.name}</h3>
      <p className="mt-1 text-sm text-gray-400">{candidate.party}</p>

      <button
        disabled={hasVoted}
        onClick={() => onVote(candidate.id)}
        className={`mt-6 w-full rounded-lg py-2.5 font-medium transition ${
          hasVoted ? "cursor-not-allowed bg-gray-700" : "bg-indigo-600 hover:bg-indigo-700"
        }`}>
        {hasVoted ? (isSelected ? "Voted" : "Vote Closed") : "Vote"}
      </button>
    </div>
  );
};

export default Vote;
