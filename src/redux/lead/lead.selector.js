import { createSelector } from "reselect";

const selectLead = (state) => state.lead;

export const selectCurrentLead = createSelector(
  [selectLead],
  (lead) => lead.leads
);
