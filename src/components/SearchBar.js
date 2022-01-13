import { connect } from 'react-redux'
// import { useState } from 'react'
import '../style.css'

function SearchBar() {
  // const { title, setTitle } = useState('')
  console.log('cheese')
  return (
    <>
      <form onSubmit={() => console.log('cheese')}>
        <input
          className='searchbar'
          type='text'
          name='movie'
          placeholder='search movie by title'
          onChange={(event) => console.log(event.target.value)}
        />
        <button className='searchbar' type='submit'>
          submit
        </button>
      </form>
      <div className='background'></div>
    </>
  )
}
const mapStateToProps = (state) => ({
  movie: state.movieStore.movie,
})

export default connect(mapStateToProps)(SearchBar)
