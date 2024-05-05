import { Button, Input } from "antd";
import ProfileIcon from "assets/icons/ProfileIcon";
import ContainerContent from "components/container-content";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1 className="text-[#108a00] font-bold text-lg mr-4 pl-8 pt-14  ">
        FREELANCEUZ
      </h1>
      <ContainerContent className="flex items-center flex-col w-[500px] ml-auto mr-auto">
        <h2 className="text-2xl font-bold mb-4">Ro'yhatdan o'tish</h2>
        <ProfileIcon />
        <Input className="w-[300px] mt-6 mb-4" placeholder="email" />
        <Input className="w-[300px]  mb-4" placeholder="username" />

        <Button className=" w-[300px] h-10  text-lg bg-[#108a00] text-white rounded-3xl">
          Tasdiqlash
        </Button>
        <p className="text-lg text-[#6c7f94] mt-10 border-solid ">
          Siz Freelanceuzdan ro'yhatdan o'tganmisiz?
        </p>
        <Link
          className="w-[200px] text-center  border-solid border-[1px] border-[#108a00] text-[#108a00] text-lg  rounded-xl mt-8 p-1"
          to={"/sign-in"}
        >
          Kirish
        </Link>
      </ContainerContent>
    </div>
  );
};

export default SignUp;
