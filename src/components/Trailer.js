import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTrailer } from '../redux/actions/MovieActions'

function Trailer({ trailer, ttId, getTrailer }) {
  useEffect(() => {
    getTrailer(ttId)
    console.log(ttId)
  }, [ttId, getTrailer])
  console.log(trailer)
  return (
    <>
      <h1>TRAILERS COMPONENT</h1>
      <p>Put the trailer here with the linkEmbed</p>
      <p>{trailer.ttId}</p>
      <p>{trailer.title}</p>
      <p>{trailer.videoTitle}</p>
      <iframe
        src={trailer.linkEmbed}
        title={trailer.title}
        width='100%'
        height='100%'
        iframe
      />
      <p>{trailer.videoDescription}</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, { getTrailer })(Trailer)
