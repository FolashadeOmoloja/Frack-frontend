import { Column } from "react-table";
import { userObject } from "./constants/typeDef";
import CTABTN from "@/components/Elements/CTA/CTA-Button";
import { DownloadResumeBotton } from "@/components/Elements/ProfileBox";

interface JobApplication {
  title: string;
  jobProximity: string;
  location: string;
  company: string;
  priceRange: string;
  status: string;
}

export interface JobPosted {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  status: string;
  candidates?: userObject[];
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
    accessor: "candidates",
    Cell: ({ row }: { row: { index: number; original: JobPosted } }) => {
      return (
        <CTABTN
          route={`/hire-talent/dashboard/my-jobs/edit-job/${row.index}`}
          CTA="Edit Job"
          height2="h-[50px] text-sm"
          backGround="bg-[#22CCED]"
        />
      );
    },
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ row }: { row: { index: number; original: JobPosted } }) => {
      return (
        <CTABTN
          route={`/hire-talent/dashboard/my-jobs/${row.index}`}
          CTA="View Applicants"
          width="w-[138px]"
          height2="h-[50px] text-sm"
        />
      );
    },
  },
];

export const hiredCandidatesColumn: Column<userObject>[] = [
  {
    Header: "",
    accessor: "firstName",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <span>
          {row.original.firstName} {row.original.lastName}
        </span>
      );
    },
  },
  {
    Header: "",
    accessor: "profileImage",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="p-7 w-[100px]">
          <div
            className="h-[60px] w-[50px] rounded-full overflow-hidden "
            style={{ width: "50px", height: "50px" }}
          >
            {row.original.profileImage ? (
              <img
                src={row.original.profileImage}
                alt=""
                className="object-center"
              />
            ) : (
              <section
                className={`w-[50px] h-[50px]  text-xl text-white  font-bold centered`}
                style={{ background: row.original.hex }}
              >
                {row.original.firstName[0]}
              </section>
            )}
          </div>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "role",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.role}</span>
          <span>{row.original.industry}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "experienceLevel",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.experienceLevel}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "emailAddress",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.emailAddress}</span>
        </div>
      );
    },
  },
  // {
  //   Header: "",
  //   accessor: "status",
  //   Cell: ({ row }: { row: { original: JobPosted } }, idx) => {
  //     return (
  //       <button className="w-[138px] h-[50px] bg-[#000080] text-white text-sm rounded-md font-semibold">
  //         View Applicants
  //       </button>
  //     );
  //   },
  // },
];

export const activeCandidatesColumn: Column<userObject>[] = [
  {
    Header: "",
    accessor: "firstName",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <span className="max-slg:text-lg">
          {row.original.firstName} {row.original.lastName}
        </span>
      );
    },
  },
  {
    Header: "",
    accessor: "profileImage",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="p-7">
          <div
            className="h-[60px] w-[50px] rounded-full overflow-hidden "
            style={{ width: "50px", height: "50px" }}
          >
            {row.original.profileImage ? (
              <img
                src={row.original.profileImage}
                alt=""
                className="object-center"
              />
            ) : (
              <section
                className={`w-[50px] h-[50px]  text-xl text-white  font-bold centered`}
                style={{ background: row.original.hex }}
              >
                {row.original.firstName[0]}
              </section>
            )}
          </div>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "role",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.role}</span>
          <span>{row.original.preference}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "experienceLevel",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4 ">
          <span>{row.original.experienceLevel}</span>
          <span>{row.original.experienceYears}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "emailAddress",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4 w-[200px]">
          <span>{row.original.emailAddress}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "filename",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return <DownloadResumeBotton filename={row.original.filename} />;
    },
  },
];
