import axios from "axios"; //
import { GET_EPISODELIST, GET_EPISODEDETAILBYID, CHANGE_SEASON } from "../constants";

export const getEpisodeList = showId => dispatch => {
  axios
    .get(`http://api.tvmaze.com/shows/${showId}/episodes`)
    .then(res => {
      dispatch({
        type: GET_EPISODELIST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getEpisodeDetailById = episodeId => dispatch => {
  axios
    .get(`http://api.tvmaze.com/episodes/${episodeId}`)
    .then(res => {
      dispatch({
        type: GET_EPISODEDETAILBYID,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const changeSeason = seasonNumber => ({
  type: CHANGE_SEASON,
  payload: seasonNumber
});
