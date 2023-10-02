

export default async function detail({searchParams}) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await response.json();
  const user = await users.find(user => {
    return user.id === Number(searchParams.id)
  })
  
  return (

    <div>
      <h1>{user.title}</h1>
      <h5>{user.id}</h5>
      <p>{user.body}</p>
    </div>
  )
}
