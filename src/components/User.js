function User({ id, name, email, city, state }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
      <h5>{city}</h5>
    </>
  )
}

export default User
