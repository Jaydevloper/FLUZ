import useHooks from "hooks/useHooks";
import { Link } from "react-router-dom";

const List = ({ data = [] }) => {
  const { get } = useHooks();
  return (
    <div className="pt-12">
      <ul className="flex flex-col gap-5">
        {data?.map((el) => {
          return (
            <li key={get(el, "_id")} className="bg-[#f1f1f1] p-4 rounded-sm">
              <Link
                className="text-[#108a00] text-base font-bold"
                to={`/detail/${get(el, "_id")}`}
              >
                {get(el, "type", "-")}
              </Link>
              <p className="text-base my-4">{get(el, "title", "-")}</p>
              <div className="flex items-center gap-2">
                {get(el, "skills[0]", "-")
                  ?.split(",")
                  ?.map((item: string, index: number) => (
                    <span
                      className="text-[#676767] font-bold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-base text-[#676767] font-semibold ">
                    To'lov
                  </span>
                  <span className="text-base font-semibold text-[#676767] ">
                    ${get(el, "payment", "-")}
                  </span>
                  <span className="text-base font-semibold text-[#676767] ">
                    {get(el, "country", "-")}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
