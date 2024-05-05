import { useState } from "react";
import ProfileFooter from "./components/ProfileFooter";
import ProfileHeader from "./components/ProfileHeader";
import ProFileMain from "./components/ProfileMain";

const ProfileInfo = () => {
  const [openModal, setOpenModal] = useState<{
    titleModal: boolean;
    skillModal: boolean;
    educationModal: boolean;
    profileModal: boolean;
  }>({
    titleModal: false,
    skillModal: false,
    educationModal: false,
    profileModal: false,
  });
  return (
    <div>
      <div className="border-solid border-[1px] rounded-s-lg mt-12 ">
        <ProfileHeader open={openModal} setOpen={setOpenModal} />
        <ProFileMain open={openModal} setOpen={setOpenModal} />
      </div>
      <footer>
        <ProfileFooter open={openModal} setOpen={setOpenModal} />
      </footer>
    </div>
  );
};
export default ProfileInfo;
