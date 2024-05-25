import useGet from "hooks/useGet";
import Detail from "./components/Detail";
import Education from "./components/Education";
import useHooks from "hooks/useHooks";

const TalentDetail = () => {
  const { get, params } = useHooks();
  const { data } = useGet({
    url: `/users/detail/${get(params, "id", "")}`,
    name: "/users-detail",
  });
  return (
    <>
      <Detail data={get(data, "userInfo[0]", initialUserData)} />
      <Education data={get(data, "userInfo[0]", initialUserData)} />
    </>
  );
};

export default TalentDetail;

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
