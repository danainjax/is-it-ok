import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTrailer } from '../redux/actions/MovieActions'
import '../style.css'

function Trailer({ trailer, ttId, getTrailer }) {
  useEffect(() => {
    getTrailer(ttId)
    console.log(ttId)
  }, [ttId, getTrailer])
  console.log(trailer)
  return (
    <div className='trailer'>
      <p>{trailer.videoTitle}</p>
      <div className='iframe-container'>
        <iframe
          src={trailer.linkEmbed}
          title={trailer.title}
          width='100%'
          height='100%'
          iframe
        />
      </div>
      <p>{trailer.videoDescription}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, { getTrailer })(Trailer)
