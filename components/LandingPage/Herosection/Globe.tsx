const Globe = () => {
  return (
    <div className="w-[520px] h-[520px] rounded-full shadow-[0_0_20px_20px_rgba(0,0,128,0.3)] globe">
      <div
        className="w-full h-full bg-no-repeat bg-cover rounded-full globe-inner"
        style={{ backgroundImage: "url('/images/homepage/map.png')" }}
      ></div>
    </div>
  );
};

export default Globe;
