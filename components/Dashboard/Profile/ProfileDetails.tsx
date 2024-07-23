const ProfileDetails = ({ skillsBool }: { skillsBool: boolean }) => {
  return (
    <section className="basis-[70%]">
      <section className="bg-white rounded-md h-[680px]"></section>
      {skillsBool ? (
        <section className="bg-white h-[197px] rounded-md mt-10"></section>
      ) : null}
    </section>
  );
};

export default ProfileDetails;
