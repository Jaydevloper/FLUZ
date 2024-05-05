import { Avatar } from "antd";
import ContainerContent from "components/container-content";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold">Ta'lantlar</h1>

      <article className="grid grid-cols-3 gap-4 items-center flex-wrap">
        {arr?.map((el: number) => (
          <ContainerContent className="pb-12 w-[370px]" padding="p-6" key={el}>
            <div className="flex itmes-center gap-3">
              <Avatar
                className="bg-[#f56a00] cursor-pointer w-[60px] h-[60px] mb-2"
                size="large"
                gap={1}
              >
                U
              </Avatar>
              <div>
                <Link
                  className="text-base font-semibold text-[#108a00]"
                  to={"/talents/view/id"}
                >
                  Falonchi Falonchayev
                </Link>
                <p className="text- base mt-2">Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p>$10/soat</p>
              <p>
                $10k{" "}
                <span className="text-base text-[#999999]">erishilgan</span>
              </p>
            </div>
          </ContainerContent>
        ))}
      </article>
    </div>
  );
};

export default List;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
