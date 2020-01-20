import { GET_SHOWDETAIL, GET_EPISODELIST, CHANGE_SEASON } from "../constants.js";

const initialState = {
  showDetail: [],
  isLoadingShowDetail: true,
  episodeList: [],
  isLoadingEpisodeList: true,
  selectedSeason: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWDETAIL:
      return {
        ...state,
        showDetail: action.payload,
        isLoadingShowDetail: false
      };
    case GET_EPISODELIST:
      return {
        ...state,
        episodeList: action.payload,
        isLoadingEpisodeList: false,
        selectedSeason: 1
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
