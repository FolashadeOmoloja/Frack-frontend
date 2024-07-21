"use client";
import Table from "@/components/Elements/Table/Table";
import { activeJobApplication } from "@/utilities/constants/jobData";
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
  return (
    <section className="dashboard-container">
      <Table data={activeJobApplication} columns={columns} />
    </section>
  );
};

export default MyJobTables;
