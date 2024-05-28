import useGet from "hooks/useGet";
import HomeHeader from "./components/HomeHeader";
import List from "./components/List";
import useHooks from "hooks/useHooks";

const Home = () => {
  const { get, query } = useHooks();
  const { data, refetch } = useGet({
    url: `/jobs/all?maxRate=${get(query, "key", "2")}`,
    name: "/jobs-all",
  });
  return (
    <>
      <HomeHeader />
      <List data={get(data, "jobs", [])} refetch={refetch} />
    </>
  );
};

export default Home;
