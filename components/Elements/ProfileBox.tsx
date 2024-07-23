import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ProfileBox = ({ title, details }: { title: string; details: string }) => {
  return (
    <div className="flex w-full border-b border-gray-200 py-5 max-sm:h-[89px] gap-4 max-slg:flex-col">
      <span className="text-[#1B2C42] font-semibold basis-[30%]">{title}</span>
      <span className="text-[#7C8698] basis-[70%]">{details}</span>
    </div>
  );
};

export default ProfileBox;

export const DownloadResumeBox = ({
  title,
  filename,
}: {
  title: string;
  filename: string;
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    const link = linkRef.current;
    if (link) {
      link.href = `/resume/${filename}`;
      link.download = filename;
      link.click();
    }
  };
  return (
    <div className="flex w-full border-b border-gray-200 py-5 max-sm:h-[120px] gap-4 slg:items-center max-slg:flex-col">
      <span className="text-[#1B2C42] font-semibold basis-[30%]">{title}</span>

      <a ref={linkRef} style={{ display: "none" }}>
        hidden download link
      </a>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-[#000080] text-white rounded-md font-semibold btn-hover flex gap-1 items-center max-w-[200px]"
      >
        <MdOutlineFileDownload />
        Download Resume
      </button>
    </div>
  );
};