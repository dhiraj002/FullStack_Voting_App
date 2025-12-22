const mockResults = [
  { id: 1, name: "Alice Johnson", party: "Progressive Party", votes: 120 },
  { id: 2, name: "Bob Smith", party: "Unity Alliance", votes: 90 },
  { id: 3, name: "Carol Lee", party: "Peoples Front", votes: 60 },
];

const Results = () => {
  const totalVotes = mockResults.reduce((sum, c) => sum + c.votes, 0);
  const maxVotes = Math.max(...mockResults.map((c) => c.votes));

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Voting <span className="text-indigo-500">Results</span>
          </h1>
          <p className="mt-3 text-gray-400">
            Live results based on votes submitted
          </p>
        </div>

        {/* Results List */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {mockResults.map((candidate) => {
            const percentage = totalVotes
              ? Math.round((candidate.votes / totalVotes) * 100)
              : 0;

            const isWinner = candidate.votes === maxVotes;

            return (
              <div
                key={candidate.id}
                className={`bg-gray-900 border rounded-xl p-6
                  ${isWinner ? "border-indigo-500" : "border-gray-800"}`}
              >
                {/* Candidate Info */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{candidate.name}</h3>
                    <p className="text-sm text-gray-400">{candidate.party}</p>
                  </div>

                  {isWinner && (
                    <span className="text-sm bg-indigo-600 px-3 py-1 rounded-full">
                      Leading
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-400 mt-3">
                  <span>{candidate.votes} votes</span>
                  <span>{percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Votes */}
        <p className="mt-12 text-center text-gray-500 text-sm">
          Total votes cast: <span className="text-white">{totalVotes}</span>
        </p>
      </div>
    </main>
  );
};

export default Results;
