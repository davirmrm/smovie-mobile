import { paramsApi } from '../../../components'
import axios from 'axios';

const apikey = 'df667745'
const urlApi = 'http://www.omdbapi.com/'

export const LIST_MOVIES = 'LIST_MOVIES'
export const setListMovies = e => ({
  type: LIST_MOVIES,
  payload: e
})

export const LIST_ADD_MOVIES = 'LIST_ADD_MOVIES'
export const putListMovies = e => ({
  type: LIST_ADD_MOVIES,
  payload: e
})

export const LIST_MOVIES_CLEAN = 'LIST_MOVIES_CLEAN'
export const setListMoviesClean = e => ({
  type: LIST_MOVIES_CLEAN,
})

export const DETAIL_MOVIES = 'DETAIL_MOVIES'
export const setDetailMovie = e => ({
  type: DETAIL_MOVIES,
  payload: e
})

export const searchMovie = e => {
  let params = paramsApi({s: e.search, apikey, page: e.page})
  return async dispatch => {
    axios.get(`${urlApi}${params}`)
    .then(result => {
      if (result.data.Response === 'True') {
        if (e?.paginate) {
          dispatch(putListMovies({...result.data, search: e.search, page: e.page}))
        } else {
          dispatch(setListMovies({...result.data, search: e.search, page: e.page}))
        }
      } else {
        // dispatch(AddAlert('info', result.data.Error))
      }
    })
    .catch(err => {
        console.error(err);
    });
  }
}


export const detailMovie = ({imdbID}, navigation) => {
  console.log({imdbID, navigation}, 'detailMoviedetailMoviedetailMovie');
  let params = paramsApi({i: imdbID, apikey})
  return async dispatch => {
    axios.get(`${urlApi}${params}`)
    .then(result => {
      dispatch(setDetailMovie(result.data))
      navigation.navigate('HomeDetail')
    })
    .catch(err => {
        console.error(err);
    });
  }
}

