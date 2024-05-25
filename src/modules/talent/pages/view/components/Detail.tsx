import { Avatar, Button } from "antd";
import GeoLocationIcon from "assets/icons/GeoLocationIcon";
import SendIcon from "assets/icons/SendIcon";
import ContainerContent from "components/container-content";
import useHooks from "hooks/useHooks";
import { useState } from "react";
import Message from "./Message";
interface IData {
  data: {
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
  };
}
const Detail = ({ data }: IData) => {
  const { get } = useHooks();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ContainerContent className="pt-12">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              className="bg-[#f56a00] w-[88px] h-[88px] mb-2"
              size="large"
              gap={1}
            >
              {get(data, "name", "-")[0]?.toUpperCase()}
            </Avatar>
            <div className="ml-2">
              <h1 className="font-semibold text-2xl">
                {get(data, "name", "-")}
              </h1>

              <p className="text-[#676767] flex items-center">
                <GeoLocationIcon />
                {`${get(data, "country", "-")}`}
              </p>
            </div>
          </div>
          <div>
            <Button onClick={() => setOpen(true)}>
              <SendIcon />
            </Button>
            <Message open={open} setOpen={setOpen} />
          </div>
        </div>
        <section className="border-t-[1px] border-solid mt-7">
          <h1 className="text-2xl font-bold ">{get(data, "title", "-")}</h1>
          <p className="text-base mt-4">{get(data, "description", "-")}</p>
        </section>
        <section className="border-t-[1px] border-solid mt-7">
          <h2 className="text-2xl font-bold mt-4 ">Qobiliyatlar</h2>
          <ul className="flex items-center gap-3 mt-3">
            {get(data, "skills[0]")
              ?.split(",")
              ?.map((el, index) => (
                <li
                  className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9] capitalize"
                  key={index}
                >
                  {el}
                </li>
              ))}
          </ul>
        </section>
      </div>
    </ContainerContent>
  );
};

export default Detail;
