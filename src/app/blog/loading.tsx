export default function Loading() {
    return (
        <>
            <h1>Loading...</h1>
        </>
    );
}
/**
 * This file will automatically wrap page.tsx file and all its nested children within
 * a react suspense boundary.
 * 
 * benefits
 * - we can display the loading state as soon as a user navigates to a new route.
 * - The immediate feedback reassures users that their action has been acknowledged, reduces perceived loading times, and make the application feel more responsive. 
 * 
 * Nextjs allows the creation of shared layouts that remain interactive while new route segments are loading
 * 
 * Users can continue interacting with certain parts of the application, such as a navigation menu or sidebar even if the main content is still being fetched.
 */
