"use client";
import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import ClientProvider from "@/components/Client/ClientProvider";

const HireTalentProfile = () => {
  const { user } = useSelector((store: any) => store.auth);
  console.log(user)
  return (
    <ClientProvider>
      <Profile skillsBool={false} user={user} skillsArr={user?.skills} />
    </ClientProvider>
  );
};

export default HireTalentProfile;
