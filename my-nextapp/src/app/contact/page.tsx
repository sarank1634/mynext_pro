"use client"
import { useState } from "react"


export default function contact() {
    const [count,setCount] = useState(0)
    console.log("hey this is server or client?")
    return (
        <div>
            {""}
            <button onClick={() => alert("hello")}>click me</button>
        </div>
    )
}