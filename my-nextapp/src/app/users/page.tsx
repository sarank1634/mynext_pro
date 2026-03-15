


export default async function Users(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
            <div>
                {" "}
                <h1>Users List</h1> 
                <ul>
                    {users.map((user: {id: number, name: string}) => {
                            <li key={users.id}>
                                <h3>{users.name}</h3>
                                </li>
                    })}
                </ul>{""}
                </div>
    )
}