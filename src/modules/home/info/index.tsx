import useGet from "hooks/useGet";
import HomeHeader from "./components/HomeHeader";
import List from "./components/List";
import useHooks from "hooks/useHooks";

const Home = () => {
  const { data } = useGet({ url: "/jobs/all", name: "/jobs-all" });
  const { get } = useHooks();
  return (
    <>
      <HomeHeader />
      <List data={get(data, "jobs", [])} />
    </>
  );
};

export default Home;
