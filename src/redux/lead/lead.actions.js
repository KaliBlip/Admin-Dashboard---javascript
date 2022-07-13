import { LeadActionTypes } from "./lead.types";

export const addLead = (lead) => ({
  type: LeadActionTypes.ADD_LEAD,
  payload: lead
});

// export const createAction = (type, payload) => ({ type, payload });
