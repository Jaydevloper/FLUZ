import useGet from "hooks/useGet";
import Comments from "./components/Comments";
import Details from "./components/Details";
import useHooks from "hooks/useHooks";
import Info from "./components/Info";
import { roles } from "consts";
import useAccess from "hooks/useAccess";

const ViewList = () => {
  const { params, get } = useHooks();
  const isCustomer = useAccess(roles.customer);
  const { data } = useGet({
    url: `/jobs/detail/${get(params, "id", "")}`,
    name: "/jobs-detail",
  });

  return (
    <>
      <Details data={get(data, "job", initialData)} />
      {isCustomer ? <Info /> : <Comments />}
    </>
  );
};

export default ViewList;

const initialData = {
  _id: "",
  additionalInfo: "",
  country: "",
  createdAt: "",
  payment: 0,
  skills: [""],
  title: "",
  type: "",
};
