export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "First Name",
    accessor: "first_name",
    sticky: "left"
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    sticky: "left"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone",
    accessor: "phone_number"
  },
  {
    Header: "Contact Owner",
    accessor: "contact_owner"
  },
  {
    Header: "Associated Company",
    accessor: "associated_company"
  },
  {
    Header: "Last Activity",
    accessor: "last_activity",
    Cell: ({ value }) => new Date(value).toLocaleDateString()
  },
  {
    Header: "Lead Status",
    accessor: "lead_status"
  },
  {
    Header: "Created Date",
    accessor: "create_date",
    Cell: ({ value }) => new Date(value).toLocaleDateString()
  }
];
