// "use client"
// import { useState } from "react"
// import ButtonComponent from "./button"

// export default async function contact() {
//     console.log("hey this is server or client?");

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//        return (
//         <div>
//              <ButtonComponent/>
//         </div>
//     )
// }

"use client"

import { useEffect, useState } from "react";

export default function Contact() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setUser(data);
    }

    getData();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}