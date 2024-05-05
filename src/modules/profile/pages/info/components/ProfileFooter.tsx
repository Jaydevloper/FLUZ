import EditIcon from "assets/icons/EditIcon";
import { IPropsModal } from "./modal.type";
import EducationModal from "./EducationModal";

const ProfileFooter = ({ open, setOpen }: IPropsModal) => {
  return (
    <div className="border-solid border-[1px] rounded-s-lg mt-2 p-8">
      <h2 className="text-xl font-bold flex items-center gap-3">
        Ta'lim{" "}
        <span
          className="cursor-pointer"
          onClick={() => setOpen({ ...open, educationModal: true })}
        >
          <EditIcon />
        </span>
        <EducationModal open={open} setOpen={setOpen} />
      </h2>
      <p className="text-base mt-2">
        February 2022 - February 2022 I'm a frontend developer, technologies I
        know Html Css Scss Boootstrap Javascript React my portfolio
        https://jaydevpartfolio.netlify.app/
      </p>
    </div>
  );
};
export default ProfileFooter;
