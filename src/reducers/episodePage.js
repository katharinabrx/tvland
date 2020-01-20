import { GET_EPISODEDETAILBYID, CHANGE_SEASON } from "../constants.js";

const initialState = {
  episodeDetail: [],
  isLoadingEpisodeDetail: true,
  selectedSeason: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EPISODEDETAILBYID:
      return {
        ...state,
        episodeDetail: action.payload,
        isLoadingEpisodeDetail: false
      };
    case CHANGE_SEASON:
      return {
        ...state,
        selectedSeason: action.payload
      };
    default:
      return state;
  }
}
