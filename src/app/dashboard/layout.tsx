export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true;
    return isLoggedIn ? <>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        <h2>Product details Layout</h2>
    </> : (login)
}

/**
 * Benefits
 * ---
 * A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.
 * 
 * independent route handling
 * Each slot of the layout, such as user analytics or revenue metrics, can have its own loading and error states. 
 * 
 * This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.
 * 
 *  sub navigation
 * Each slot of the dashboard can essentially function as a mini-application, complete with its own navigation and state management.
 * 
 * This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.
 */


/**
 * Parallel routes allow us to conditionally render pages based on certain conditions keeping our code well seperated in the same URL.
 */