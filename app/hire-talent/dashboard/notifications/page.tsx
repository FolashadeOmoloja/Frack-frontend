import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import Notifications from "@/components/Dashboard/TalentDashboard/NotificationsCont";
import { talentNotifications } from "@/utilities/constants";

const SettingsPage = () => {
  return (
    <>
      <HireTalentNav activeItem={0} />
      <Notifications notifications={talentNotifications} paymentHistoryBool />
    </>
  );
};

export default SettingsPage;
