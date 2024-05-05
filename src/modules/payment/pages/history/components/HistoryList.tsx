import { Avatar, List } from "antd";

const HistoryList = () => {
  return (
    <div className="bg-[#f9f9f9] py-20 px-8 mt-7">
      {data?.length > 0 ? (
        <List
          className="overflow-y-auto h-[400px] pr-2"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item?.title}</a>}
                description="Hisob Tarixi"
              />
              <span>$0</span>
            </List.Item>
          )}
        />
      ) : (
        <div className="text-center text-3xl text-bold capitalize">
          to'lovlar mavjud emas...
        </div>
      )}
    </div>
  );
};

export default HistoryList;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
];
