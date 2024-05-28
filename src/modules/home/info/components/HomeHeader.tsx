import { Tabs } from "antd";
import useHooks from "hooks/useHooks";

const HomeHeader = () => {
  const { navigate, qs, get, query } = useHooks();
  return (
    <div className="pt-9">
      <h1 className="font-semibold text-3xl ">Ishlar ro'yxati</h1>
      <Tabs
        className="shadow-inherit"
        onChange={(e) => navigate({ search: qs.stringify({ key: e }) })}
        activeKey={get(query, "key", "2") as string}
        items={[
          {
            key: "1",
            label: "Eng mashxur ishlar",
          },
          {
            key: "2",
            label: "Ishlar ro'yxati",
          },
        ]}
      />
    </div>
  );
};

export default HomeHeader;
