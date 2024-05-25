import { Tabs } from "antd";
import useHooks from "hooks/useHooks";

const HomeHeader = () => {
  const { navigate, qs } = useHooks();
  return (
    <div className="pt-9">
      <h1 className="font-semibold text-3xl ">Ishlar ro'yxati</h1>
      <Tabs
        className="shadow-inherit"
        onChange={(e) => navigate({ search: qs.stringify({ key: e }) })}
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Ishlar ro'yxati",
          },
          {
            key: "2",
            label: "Eng mashxur ishlar",
          },
        ]}
      />
    </div>
  );
};

export default HomeHeader;
