import { Avatar } from "antd";
import ContainerContent from "components/container-content";
import dayjs from "dayjs";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";

const Info = () => {
  const { get, params } = useHooks();
  const { data } = useGet({
    url: `/jobs/comment/list/${get(params, "id")}`,
    name: "/jobs-comment-list",
  });
  const { data: Data } = useGet({
    url: `/users/detail/${get(data, "data[0].createdBy", "0")}`,
    name: "/user-detail-id",
  });
  return (
    <div>
      <ContainerContent>
        <h2 className="text-2xl font-semibold">Izohalar</h2>
        {get(data, "data", []).map((el) => (
          <div className="mt-6 mb-6" key={get(el, "_id")}>
            <div className="flex items-center justify-between">
              <section>
                <Avatar
                  className="bg-[#f56a00] cursor-pointer w-[60px] h-[60px] mb-2"
                  size="large"
                  gap={1}
                >
                  {get(Data, "userInfo[0].name", "-")[0]?.toUpperCase()}
                </Avatar>
                <h2 className="text-lg font-semibold">
                  {get(Data, "userInfo[0].name", "-")}
                </h2>
              </section>
              <h2>
                {" "}
                <span className="text-base text-[#676767] mr-2">
                  Oxirgi Qo'shilgan Vaqti:
                </span>
                {dayjs(get(el, "createdAt")).format("DD/MM/YYYY")}
              </h2>
            </div>
            <p className="text-base font-semibold">
              <span className="text-base text-[#676767] mr-2">
                Tugatish Vaqti:
              </span>
              {dayjs(get(el, "date")).format("DD/MM/YYYY")}
            </p>
            <ContainerContent>
              <p className="text-xl">{get(el, "text")}</p>
            </ContainerContent>
          </div>
        ))}
      </ContainerContent>
    </div>
  );
};

export default Info;
