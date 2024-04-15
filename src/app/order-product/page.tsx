"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.push("/")
        // router.replace("/") //replace the history
        // router.back() //to navigate back
        // router.forward() // to navigate forward
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}