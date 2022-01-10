import { connect } from 'react-redux'
import { getTrailer } from '../redux/actions/MovieActions'

function Trailer({ trailer }) {
  ;<h1>{trailer.title}</h1>
}

const mapStateToProps = (state) => {
  return {
    trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, { getTrailer })(Trailer)
