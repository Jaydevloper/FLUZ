import useGet from "hooks/useGet";
import List from "./components/List";
import useHooks from "hooks/useHooks";

const TalentList = () => {
  const { get } = useHooks();
  const { data } = useGet({ url: "/users/all", name: "/users-all" });
  return (
    <>
      <List data={get(data, "userInfo", [initialUserData])} />
    </>
  );
};

export default TalentList;

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
