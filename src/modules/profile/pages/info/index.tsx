import { useState } from "react";
import ProfileFooter from "./components/ProfileFooter";
import ProfileHeader from "./components/ProfileHeader";
import ProFileMain from "./components/ProfileMain";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";

const ProfileInfo = () => {
  const { get } = useHooks();
  const { data } = useGet({ url: "/users/info", name: "/user-info" });
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
        <ProfileHeader
          data={get(data, "users[0]", initialData)}
          open={openModal}
          setOpen={setOpenModal}
        />
        <ProFileMain
          open={openModal}
          setOpen={setOpenModal}
          data={get(data, "userInfo[0]", initialUserData)}
        />
      </div>
      <footer>
        <ProfileFooter
          open={openModal}
          setOpen={setOpenModal}
          data={get(data, "userInfo[0]", initialUserData)}
        />
      </footer>
    </div>
  );
};
export default ProfileInfo;

const initialData = {
  email: "",
  name: "",
};

const initialUserData = {
  country: "",
  createdAt: "",
  createdBy: "",
  description: "",
  education: "",
  name: "",
  payment: 0,
  skills: [""],
  title: "",
  _id: "",
};
