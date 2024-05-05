import EditIcon from "assets/icons/EditIcon";
import TitleModal from "./TitleModal";
import SkillModal from "./SkillModal";
import { IPropsModal } from "./modal.type";

const ProFileMain = ({ open, setOpen }: IPropsModal) => {
  return (
    <div>
      <div className="border-b-[1px] border-solid p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            I'm a frontend developer
            <span
              className="cursor-pointer"
              onClick={() => setOpen({ ...open, titleModal: true })}
            >
              <EditIcon />
            </span>{" "}
            <TitleModal open={open} setOpen={setOpen} />
          </h2>
          <p className="text-base font-bold">$10</p>
        </div>
        <p className="text-base mt-4">
          I am a frontend developer, the technologies I know are Html Css Scss
          Boootstrap Javascript React Git Github Real Project. If you trust me,
          I will make you my job
        </p>
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
          <li className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9] capitalize">
            js
          </li>
          <li className="text-[#676767] text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            Node js
          </li>
          <li className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            React js
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProFileMain;
