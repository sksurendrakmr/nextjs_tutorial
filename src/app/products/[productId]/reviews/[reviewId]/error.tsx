"use client";
export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            Error in reviewId - {error?.message}
            <button onClick={reset}>Retry Again</button>
        </div>
    );
}

/**
 * error.tsx
 * ---
 * Automatically wrap a route segment and its nested children in a React Error Boundary
 *
 * Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
 *
 * Isolcate errors to affected segments while keeping the rest of the application functional
 *
 * Add functionality to attempt to recover from an error without a full page reload.
 */

/**
 * Executing the reset function attempts to re-render the error boundary content.
 * If successful, the fallback error component is replaced with the re-rendered content from page.tsx.
 */
