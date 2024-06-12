import useGet from "hooks/useGet";
import List from "./components/List";
import useHooks from "hooks/useHooks";

const JobsList = () => {
  const { get } = useHooks();
  const { data } = useGet({ url: "/jobs/list", name: "/jobs-list" });
  return (
    <>
      <List data={get(data, "jobs", [])} />
    </>
  );
};

export default JobsList;
