import { Avatar } from "antd";
import ContainerContent from "components/container-content";
import useHooks from "hooks/useHooks";
import { Link } from "react-router-dom";
interface IData {
  data: [
    {
      country: string;
      createdAt: string;
      createdBy: string;
      description: string;
      education: string;
      name: string;
      payment: number;
      skills: string[];
      title: string;
      _id: string;
    },
  ];
}
const List = ({ data }: IData) => {
  const { get } = useHooks();
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold">Ta'lantlar</h1>

      <article className="grid grid-cols-3 gap-4 items-center flex-wrap">
        {data?.map((el) => (
          <ContainerContent
            className="pb-12 w-[370px]"
            padding="p-6"
            key={get(el, "_id", "-")}
          >
            <div className="flex itmes-center gap-3">
              <Avatar
                className="bg-[#f56a00] cursor-pointer w-[60px] h-[60px] mb-2"
                size="large"
                gap={1}
              >
                {get(el, "name", "-")[0]?.toUpperCase()}
              </Avatar>
              <div>
                <Link
                  className="text-base font-semibold text-[#108a00]"
                  to={`/talents/view/${get(el, "createdBy", "-")}`}
                >
                  {get(el, "name", "-")}
                </Link>
                <p className="text- base mt-2">Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p>${get(el, "payment", "-")}/soat</p>
              <p>
                {get(el, "country", "-")}
                {"  "}
              </p>
            </div>
          </ContainerContent>
        ))}
      </article>
    </div>
  );
};

export default List;
