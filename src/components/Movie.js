function Movie(props) {
  console.log(props)
  return (
    <>
      <div className='card'>
        <img src={props.image} alt={props.title} />
        <div className='container'>
          <p>{props.releaseDate}</p>
          <h4>
            <b>{props.title}</b>
            <p>{props.contentRating}</p>
            <p>{props.runtime}</p>
          </h4>
          <p>{props.plot}</p>
          <ul>
            <li>{props.stars}</li>
            <li>{props.genres}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Movie
