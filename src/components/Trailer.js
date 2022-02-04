import { connect } from 'react-redux'
import { getTrailer } from '../redux/actions/MovieActions'

function Trailer({ trailer }) {
  console.log(trailer)
  return (
    <>
      <h1>TRAILERS COMPONENT</h1>
      <p>Put the trailer here with the linkEmbed</p>
      {/* <iframe 
  //   src='https://www.imdb.com/video/imdb/vi2959588889/imdb/embed'
  //   src={triler.trailer}
  //   title={title}
  //   width='100%'
  //   height='100%'
  // ></iframe>*/}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, { getTrailer })(Trailer)
