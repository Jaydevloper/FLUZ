import useGet from "hooks/useGet";
import Comments from "./components/Comments";
import Details from "./components/Details";
import useHooks from "hooks/useHooks";

const ViewList = () => {
  const { params, get } = useHooks();
  const { data } = useGet({
    url: `/jobs/detail/${get(params, "id", "")}`,
    name: "/jobs-detail",
  });
  console.log(data);
  return (
    <>
      <Details data={get(data, "job", initialData)} />
      <Comments />
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
