import DownloadFileComponent from "components/download-file";
import dayjs from "dayjs";
import useHooks from "hooks/useHooks";

interface IProps {
  data: {
    _id: string;
    additionalInfo: string;
    country: string;
    createdAt: string;
    payment: number;
    skills: string[];
    title: string;
    type: string;
  };
}

const Details = ({ data }: IProps) => {
  const { get } = useHooks();
  return (
    <div className="border-solid border-[1px] rounded-s-lg mt-12 p-8">
      <h2 className="text-2xl font-semibold">Ish Haqida</h2>
      <h3 className="text-base mt-4 font-semibold w-[300px]">
        {get(data, "title", "-")}
      </h3>
      <h3 className="text-lg font-semibold mt-7">Malumot</h3>
      <div className="flex items-center gap-2 mt-6">
        <h4 className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
          {get(data, "type", "-")}
        </h4>
        <p className="text-base">
          Oxirgi qo'shilgan sana{" "}
          {dayjs(`${get(data, "createdAt", "")}`).format("DD/MM/YYYY")}
        </p>
      </div>
      <p className="text-base mt-4 w-[300px]">
        {get(data, "additionalInfo", "-")}
      </p>
      <div className="border-solid border-t-[1px] mt-9 pt-5 ">
        <h2 className="text-lg font-semibold">Qobiliyatlar</h2>
        <ul className="flex items-center gap-2 mt-6">
          {get(data, "skills[0]")
            ?.split(",")
            ?.map((el, index) => (
              <li
                className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]"
                key={index}
              >
                {el}
              </li>
            ))}
        </ul>
      </div>
      <DownloadFileComponent baseUrl={`jobs/download/${get(data, "_id")}`} />
    </div>
  );
};
export default Details;
