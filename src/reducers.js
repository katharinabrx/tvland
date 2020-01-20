import { combineReducers } from "redux";

import homePage from "./reducers/homePage";
import showPage from "./reducers/showPage";
import episodePage from "./reducers/episodePage";

export default combineReducers({
  homePage,
  showPage,
  episodePage
});
