import { GET_SHOWDETAIL, GET_SHOWLIST } from "../constants.js";

const initialState = {
  showDetail: [],
  isLoadingShowDetail: true,
  showList: [],
  isLoadingShowList: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWDETAIL:
      return {
        ...state,
        showDetail: action.payload,
        isLoadingShowDetail: false
      };
    case GET_SHOWLIST:
      return {
        ...state,
        showList: action.payload,
        isLoadingShowList: false
      };
    default:
      return state;
  }
}
