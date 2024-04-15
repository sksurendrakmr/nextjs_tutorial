"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles.css";


const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forget Password", href: "/forget-password" }
]

/**
 * To determine if a link is active, Nextjs provides usePathname hook.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <div>
            {
                navLinks.map(link => {
                    const isActive = pathname.startsWith(link.href)

                    return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })
            }
            {children}
        </div>
    )
}