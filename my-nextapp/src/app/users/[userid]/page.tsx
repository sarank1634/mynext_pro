async function fetchUser(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {

  const { userid } = await params;

  const user = await fetchUser(userid);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
}