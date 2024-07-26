import EditJobs from "@/components/Dashboard/HireTalentDashboard/EditJobs";
import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import { jobsPostedByCompany } from "@/utilities/constants/jobData";

const EditJobPage = ({ params }: { params: { editId: string } }) => {
  const jobPostArr = jobsPostedByCompany[parseInt(params.editId)];

  return (
    <>
      <HireTalentNav activeItem={1} />
      <EditJobs jobPost={jobPostArr} />
    </>
  );
};

export default EditJobPage;
