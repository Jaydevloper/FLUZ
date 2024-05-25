import EditIcon from "assets/icons/EditIcon";
import SkillModal from "./SkillModal";
import TitleModal from "./TitleModal";
import { IData } from "./modal.type";
import useHooks from "hooks/useHooks";

const ProFileMain = ({ open, setOpen, data, refetch }: IData) => {
  const { get } = useHooks();

  return (
    <div>
      <div className="border-b-[1px] border-solid p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            {get(data, "title", "")}
            <span
              className="cursor-pointer"
              onClick={() => setOpen({ ...open, titleModal: true })}
            >
              <EditIcon />
            </span>{" "}
            <TitleModal
              id={get(data, "_id", "")}
              refetch={refetch}
              open={open}
              setOpen={setOpen}
            />
          </h2>
          <p className="text-base font-bold">
            ${get(data, "payment", "")}/soat
          </p>
        </div>
        <p className="text-base mt-4">{get(data, "description", "")}</p>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          Qobiliyatlar
          <span
            className="cursor-pointer"
            onClick={() => setOpen({ ...open, skillModal: true })}
          >
            <EditIcon />
          </span>{" "}
          <SkillModal open={open} setOpen={setOpen} />
        </h2>
        <ul className="flex items-center gap-3 mt-3">
          {get(data, "skills", [])?.map((el, index) => (
            <li
              className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9] capitalize"
              key={index}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProFileMain;
