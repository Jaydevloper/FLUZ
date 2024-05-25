import EditIcon from "assets/icons/EditIcon";
import EducationModal from "./EducationModal";
import { IData } from "./modal.type";
import useHooks from "hooks/useHooks";

const ProfileFooter = ({ open, setOpen, data, refetch }: IData) => {
  const { get } = useHooks();
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
        <EducationModal
          id={get(data, "_id", "")}
          open={open}
          setOpen={setOpen}
          refetch={refetch}
        />
      </h2>
      <p className="text-base mt-2">{get(data, "education", "")}</p>
    </div>
  );
};
export default ProfileFooter;
