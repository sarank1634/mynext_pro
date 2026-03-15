"use client"
import { useState } from "react"
import ButtonComponent from "./button"

export default async function contact() {
    console.log("hey this is server or client?");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
       return (
        <div>
             <ButtonComponent/>
        </div>
    )
}