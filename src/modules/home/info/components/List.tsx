import useHooks from "hooks/useHooks";
import { Link } from "react-router-dom";

const List = ({ data = [] }) => {
  const { get } = useHooks();
  console.log(data);
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {data?.map((el) => {
          return (
            <li key={get(el, "_id")} className="bg-[#f1f1f1] p-4 rounded-sm">
              <Link
                className="text-[#108a00] text-base font-bold"
                to="/detail/2"
              >
                {get(el, "type", "-")}
              </Link>
              <p className="text-base my-4">{get(el, "title", "-")}</p>
              <div className="flex items-center gap-2">
                <span className="text-[#676767] font-bold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
                  React
                </span>
              </div>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
