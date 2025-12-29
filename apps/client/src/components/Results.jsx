const mockResults = [
  { id: 1, name: "Alice Johnson", party: "Progressive Party", votes: 120 },
  { id: 2, name: "Bob Smith", party: "Unity Alliance", votes: 90 },
  { id: 3, name: "Carol Lee", party: "Peoples Front", votes: 60 },
];

const Results = () => {
  const totalVotes = mockResults.reduce((sum, c) => sum + c.votes, 0);
  const maxVotes = Math.max(...mockResults.map((c) => c.votes));

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Voting <span className="text-indigo-500">Results</span>
          </h1>
          <p className="mt-3 text-gray-400">Live results based on votes submitted</p>
        </div>

        {/* Results List */}
        <div className="mx-auto max-w-3xl space-y-6">
          {mockResults.map((candidate) => {
            const percentage = totalVotes ? Math.round((candidate.votes / totalVotes) * 100) : 0;

            const isWinner = candidate.votes === maxVotes;

            return (
              <div
                key={candidate.id}
                className={`rounded-xl border bg-gray-900 p-6 ${isWinner ? "border-indigo-500" : "border-gray-800"}`}>
                {/* Candidate Info */}
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-gray-400">{candidate.party}</p>
                  </div>

                  {isWinner && (
                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm">Leading</span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {/* Stats */}
                <div className="mt-3 flex justify-between text-sm text-gray-400">
                  <span>{candidate.votes} votes</span>
                  <span>{percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Votes */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Total votes cast: <span className="text-white">{totalVotes}</span>
        </p>
      </div>
    </main>
  );
};

export default Results;
