import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";
import List from "./components/List";

const SavedJobs = () => {
  const { get } = useHooks();
  const { data, refetch } = useGet({ url: "/jobs/save", name: "/jobs-save" });

  return (
    <div>
      <List data={get(data, "jobs", [])} refetch={refetch} />
    </div>
  );
};

export default SavedJobs;
