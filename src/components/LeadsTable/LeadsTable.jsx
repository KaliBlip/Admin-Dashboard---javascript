import { useMemo } from "react";
//redux
import { useSelector } from "react-redux";
//react table
import { useTable, usePagination, useSortBy, useRowSelect } from "react-table";
//components
import Checkbox from "../Checkbox/Checkbox";
import Card from '../Card/Card'

import { COLUMNS } from "../../COLUMNS";
import styles from "./leadsTable.module.scss";

function LeadsTable() {
  const leadsFromState = useSelector((state) => state.lead.leads);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => leadsFromState, [leadsFromState]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    selectedFlatRows
  } = useTable(
    { columns, data },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ];
      });
    }
  );

  const selectedRowHandler = (row) => {
    // console.log(selectedFlatRows.map((row) => row.values));
    console.log(row.values);
  };

  //initialState: { pageIndex: 2 } this line of code will allow us to render our page to the specified index, it goes inside the first argument where we pass in our columns and data

  const { pageIndex, pageSize } = state;
  console.log("running table");

  return (
    <>
    <Card className={styles.cardLeads}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ↓"
                        : " ↑"
                      : column.id === "selection"
                      ? ""
                      : " ⇵"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      onClick={() => selectedRowHandler(cell.row)}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </Card>
      <div style={{ marginTop: "1rem" }}>
        <span>
          Page <strong>{`${pageIndex + 1} of ${pageOptions.length} `}</strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
}

export default LeadsTable;
