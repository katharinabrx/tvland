import axios from "axios";
import { GET_SHOWLIST, GET_SHOWDETAIL, CHANGE_SEASON } from "../constants";

// Returns only the first page of shows
export const getShowList = () => dispatch => {
  axios
    .get("http://api.tvmaze.com/shows?page=1")
    .then(res => {
      dispatch({
        type: GET_SHOWLIST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getShowDetail = showId => dispatch => {
  axios
    .get(`http://api.tvmaze.com/shows/${showId}`)
    .then(res => {
      dispatch({
        type: GET_SHOWDETAIL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const changeSeason = seasonNumber => ({
  type: CHANGE_SEASON,
  payload: seasonNumber
});
