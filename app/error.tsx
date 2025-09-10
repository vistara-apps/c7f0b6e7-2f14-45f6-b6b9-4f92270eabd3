'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong!
        </h2>
        <p className="text-gray-600">
          We encountered an error while loading SkillSwap Connect.
        </p>
        <button
          onClick={reset}
          className="bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
