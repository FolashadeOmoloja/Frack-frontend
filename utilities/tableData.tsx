import { Column } from "react-table";

interface JobApplication {
  title: string;
  jobProximity: string;
  location: string;
  company: string;
  priceRange: string;
  status: string;
}

interface JobPosted {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  status: string;
}

export const activeColumns: Column<JobApplication>[] = [
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

export const companyActiveColumns: Column<JobPosted>[] = [
  {
    Header: "",
    accessor: "title",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return <span>{row.original.title}</span>;
    },
  },
  {
    Header: "",
    accessor: "department",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.department}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "employmentType",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.employmentType}</span>
          <span>{row.original.salaryRange}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ row }: { row: { original: JobPosted } }, idx) => {
      return (
        <button className="w-[138px] h-[50px] bg-[#000080] text-white text-sm rounded-md font-semibold">
          View Applicants
        </button>
      );
    },
  },
];
