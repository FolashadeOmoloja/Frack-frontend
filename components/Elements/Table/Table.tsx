"use client";

import React from "react";
import {
  usePagination,
  useTable,
  Column,
  TableOptions,
  TableInstance,
  TableState,
  Row,
} from "react-table";

interface TableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  setPage?: (value: number) => void;
  totalPages?: number;
}

// Extend TableState to include pageIndex
interface ExtendedTableState<T extends object> extends TableState<T> {
  pageIndex: number;
}

const Table = <T extends object>({
  columns,
  data,
  setPage,
  totalPages,
}: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    } as TableOptions<T>,
    usePagination
  ) as TableInstance<T> & { state: ExtendedTableState<T>; page: any };

  const handlePageClick = (event: any) => {
    if (setPage) {
      setPage(event.selected + 1);
    }
  };

  return (
    <section className="w-full">
      <div>
        <div className="w-full overflow-y-auto">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} key={column.id}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: Row<T>, idx: number) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    key={idx}
                    className="border-b border-[#CCD2D9] h-[130px]"
                  >
                    {row.cells.map((cell, idx) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          key={idx}
                          className={`${
                            idx === 0 ? "font-semibold text-xl" : ""
                          }`}
                        >
                          <div>{cell.render("Cell")}</div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* {totalPages ? <Pagination pageCount={totalPages} handlePageClick={handlePageClick} /> : ""} */}
    </section>
  );
};

export default Table;
