function Movie(props) {
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img width='100%' src={props.image} alt={props.title} />
          <div className='container'>
            <h4>
              <b>props.title</b>
            </h4>
            <p>
              {props.title}, {props.year}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
