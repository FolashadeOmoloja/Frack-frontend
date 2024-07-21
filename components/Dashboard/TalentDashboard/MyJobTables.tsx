"use client";
import Table from "@/components/Elements/Table/Table";
import { activeJobApplication } from "@/utilities/constants/jobData";
import { useEffect, useState } from "react";
import { Column } from "react-table";

interface JobApplication {
  title: string;
  jobProximity: string;
  location: string;
  company: string;
  priceRange: string;
  status: string;
}

const columns: Column<JobApplication>[] = [
  {
    Header: "",
    accessor: "title",
    Cell: ({ row }: { row: { original: JobApplication } }) => {
      return <span>{row.original.title}</span>;
    },
  },
  {
    Header: "",
    accessor: "jobProximity",
    Cell: ({ row }: { row: { original: JobApplication } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.jobProximity}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "priceRange",
    Cell: ({ row }: { row: { original: JobApplication } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.company}</span>
          <span>{row.original.priceRange}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ row }: { row: { original: JobApplication } }) => {
      return (
        <button className="w-[138px] h-[50px] bg-[#D8D8D8] text-[#7C8698] text-sm rounded-md">
          {row.original.status}
        </button>
      );
    },
  },
];

const MyJobTables = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const lastPage = Math.ceil(activeJobApplication.length / itemsPerPage) - 1;
    if (page > lastPage) {
      setPage(lastPage);
    }
  }, [activeJobApplication.length, page, itemsPerPage]);

  const currentPageData = activeJobApplication.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(activeJobApplication.length / itemsPerPage);
  const displayTotalPages =
    currentPageData.length === 0 ? totalPages - 1 : totalPages;

  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Ditimi, see how your application is going
      </h2>
      <span className="text-[#7C8698] ">
        This is your complete frack overview
      </span>
      <Table
        data={currentPageData}
        columns={columns}
        setPage={setPage}
        totalPages={displayTotalPages > 1 ? displayTotalPages : 0}
      />
    </section>
  );
};

export default MyJobTables;
