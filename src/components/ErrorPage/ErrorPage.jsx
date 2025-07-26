import React from 'react';

export default function ErrorPage({ onRetry }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
            </svg>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Connection Error
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
                We couldn't connect to the server. Please check your internet connection.
            </p>

            <button
                onClick={onRetry}
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md cursor-pointer"
            >
                Retry
            </button>
        </div>
    );
}
