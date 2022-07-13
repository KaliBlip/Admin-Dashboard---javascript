import { LeadActionTypes } from "./lead.types";
//mock data
import MOCK_DATA from "../../MOCK_DATA.json";

const INITIAL_STATE = {
  leads: MOCK_DATA
};

const LeadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadActionTypes.ADD_LEAD:
      return {
        ...state,
        leads: [action.payload, ...state.leads]
      };
    default:
      return state;
  }
};

export default LeadReducer;
