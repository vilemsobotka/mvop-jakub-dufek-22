import Link from "next/link";
export default async function home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await response.json();

  return (
    <div>
      <h1>home</h1>
      <div>
        {users.map((user,) => {
          const { title } = user
          return (
            <div>
              <Link
                href={{
                  pathname: 'detail',
                  query: {id : user.id}
                }}
              >{title}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}



