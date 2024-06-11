import DownloadIcon from "assets/icons/DownloadIcon";
import React from "react";

const DownloadFileComponent: React.FC<{ baseUrl: string }> = ({ baseUrl }) => {
  return (
    <div>
      <a
        className=" w-[140px] text-base flex items-center gap-2 font-semibold bg-[#f9f9f9 ] border-solid border-[1px] rounded-lg mt-12 p-2"
        href={`http://localhost:5000/${baseUrl}`}
        download
        target="_blank"
      >
        Yuklab olish
        <DownloadIcon />
      </a>
    </div>
  );
};

export default DownloadFileComponent;
