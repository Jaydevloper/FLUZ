import { Avatar } from "antd";
import { IProps } from "./list.type";
import useHooks from "hooks/useHooks";

const List = ({ data }: IProps) => {
  const { get, navigate, qs } = useHooks();
  return (
    <div>
      <section className="bg-[#f1f1f1] p-8 mt-6 w-[450px] h-[500px] overflow-y-auto border-solid border-r-[2px]  ">
        {data.map((el) => (
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
              navigate({
                search: qs.stringify({ id: get(el, "createdBy", "-") }),
              })
            }
            key={get(el, "_id", "-")}
          >
            <Avatar className="bg-[#f56a00] mb-2" size="large" gap={1}>
              {get(el, "name", "-")[0]?.toUpperCase()}
            </Avatar>
            <p className="font-semibold text-lg ml-5 capitalize">
              {get(el, "name", "-")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;
