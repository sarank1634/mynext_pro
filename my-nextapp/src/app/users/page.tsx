export default async function Users(){

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div>
            <h1>Users List</h1>
            {users.map((user:any)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}