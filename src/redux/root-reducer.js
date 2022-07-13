import { combineReducers } from "redux";

import LeadReducer from "./lead/lead.reducer";

export default combineReducers({
  lead: LeadReducer
});
