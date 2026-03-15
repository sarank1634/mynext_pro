import Link from "next/link";   

export default function NotFound() {
    return (
        <div style={{textAlign: "center", padding: "50px"}}>
            <h1 style={{fontSize: "48px", marginBottom: "20px"}}>404 - Not Found</h1>
            <p style={{fontSize: "18px", color: "#666"}}>The page you are looking for does not exist.</p>
            <Link href="/">
                <a style={{fontSize: "18px", color: "#666"}}>Return to Home</a>
            </Link>
        </div>
    );
}