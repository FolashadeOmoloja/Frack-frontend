import Notifications from "@/components/Dashboard/TalentDashboard/NotificationsCont";
import TalentNavbar from "@/components/Dashboard/TalentDashboard/TalentNavbar";
import { talentNotifications } from "@/utilities/constants";

const SettingsPage = () => {
  return (
    <>
      <TalentNavbar activeItem={0} />
      <Notifications notifications={talentNotifications} />
    </>
  );
};

export default SettingsPage;
