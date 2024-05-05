import { Avatar, Button } from "antd";
import GeoLocationIcon from "assets/icons/GeoLocationIcon";
import SendIcon from "assets/icons/SendIcon";
import ContainerContent from "components/container-content";
import dayjs from "dayjs";
import Message from "./Message";
import { useState } from "react";

const Detail = () => {
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
              U
            </Avatar>
            <div className="ml-2">
              <h1 className="font-semibold text-2xl">User</h1>

              <p className="text-[#676767] flex items-center">
                <GeoLocationIcon />
                {`Tashkent, Uzbekistan-${dayjs(new Date()).format(
                  "HH:mm"
                )} Hozirgi vaqt`}
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
          <h1 className="text-2xl font-bold ">I'm a frontend developer</h1>
          <p className="text-base mt-4">
            I am a frontend developer, the technologies I know are Html Css Scss
            Boootstrap Javascript React Git Github Real Project. If you trust
            me, I will make you my job
          </p>
        </section>
        <section className="border-t-[1px] border-solid mt-7">
          <h2 className="text-2xl font-bold mt-4 ">Qobiliyatlar</h2>
          <ul className="flex items-center gap-3 mt-3">
            <li className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9] capitalize">
              js
            </li>
            <li className="text-[#676767] text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
              Node js
            </li>
            <li className="text-[#676767]  text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
              React js
            </li>
          </ul>
        </section>
      </div>
    </ContainerContent>
  );
};

export default Detail;
