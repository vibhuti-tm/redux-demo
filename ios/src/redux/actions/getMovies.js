import axios from "axios";
import { GET_MOVIES ,ADD_FAVORITE_ITEM,REMOVE_FAVORITE_ITEM} from "./actions";

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '1765b5904a13600bcd233ea6871d05d3';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;



export const getMovies = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        console.log('resss',res.data.results)
        if (res.data) {
          dispatch({
            type: GET_MOVIES,
            payload: res.data.results,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };

  export const addFavorite = movie => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: movie,
    });
  };
  export const removeFavorite = movie => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: movie,
    });
  };