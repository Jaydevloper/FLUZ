import { useState } from "react";
import ProfileFooter from "./components/ProfileFooter";
import ProfileHeader from "./components/ProfileHeader";
import ProFileMain from "./components/ProfileMain";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";
import Create from "./components/Create";
import { Button, Empty } from "antd";

const ProfileInfo = () => {
  const { get, navigate, qs, query } = useHooks();
  const { data, refetch } = useGet({
    url: "/users/info",
    name: "/user-info",
  });
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
      {get(data, "userInfo", []).length > 0 ? (
        <div>
          <div className="border-solid border-[1px] rounded-s-lg mt-12 ">
            <ProfileHeader
              refetch={refetch}
              data={get(data, "userInfo[0]", initialUserData)}
              open={openModal}
              setOpen={setOpenModal}
            />
            <ProFileMain
              refetch={refetch}
              open={openModal}
              setOpen={setOpenModal}
              data={get(data, "userInfo[0]", initialUserData)}
            />
          </div>
          <footer>
            <ProfileFooter
              refetch={refetch}
              open={openModal}
              setOpen={setOpenModal}
              data={get(data, "userInfo[0]", initialUserData)}
            />
          </footer>
        </div>
      ) : (
        <div>
          {get(query, "key", 0) === "1" ? (
            <Create refetch={refetch} />
          ) : (
            <Empty
              className="flex flex-col justify-center pt-60"
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 60, margin: "0 auto" }}
            >
              <Button
                onClick={() => navigate({ search: qs.stringify({ key: 1 }) })}
                type="primary"
              >
                Yaratish
              </Button>
            </Empty>
          )}
        </div>
      )}
    </div>
  );
};
export default ProfileInfo;

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
