export const SearchBar = () => {
  return (
    <>
      <input
        type='text'
        name='movie'
        placeholder='search movie by title'
        onChange={(event) => console.log(event.target.value)}
      />
      <button type='submit'>submit</button>
    </>
  )
}
