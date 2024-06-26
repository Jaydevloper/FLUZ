import { Button, Input } from "antd";
import ProfileIcon from "assets/icons/ProfileIcon";
import ContainerContent from "components/container-content";
import { LogIn } from "features/auth";
import useForm from "hooks/useForm";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const { get } = useHooks();
  const { handleChange, fields } = useForm();
  const dispatch = useDispatch();
  const { mutate } = usePost({
    onSuccess: (res) => {
      if (get(res, "data.token")) {
        dispatch(LogIn(res.data));
        toast.success("Muvaffaqiyatli Kirish!");
      }
    },
    onError: (err) => {
      toast.error("Xato!");
      toast.error(get(err, "response.data"));
    },
  });
  return (
    <div>
      <h1 className="text-[#108a00] font-bold text-lg mr-4 pl-8 pt-14  ">
        FREELANCEUZ
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate({
            url: "/auth/login",
            method: "post",
            data: fields,
          });
        }}
      >
        <ContainerContent className="flex items-center flex-col w-[500px] ml-auto mr-auto">
          <h2 className="text-2xl font-bold mb-4">Kirish</h2>
          <ProfileIcon />

          <Input
            onChange={(e) => handleChange(e)}
            className="w-[300px] mt-6 mb-4"
            placeholder="email"
            required
            name="email"
          />
          <Input
            onChange={(e) => handleChange(e)}
            className="w-[300px]  mb-4"
            placeholder="username"
            required
            name="name"
          />
          <Button
            htmlType="submit"
            className=" w-[300px] h-10  text-lg bg-[#108a00] text-white rounded-3xl"
          >
            Tasdiqlash
          </Button>
          <p className="text-lg text-[#6c7f94] mt-10 border-solid ">
            Siz Freelanceuzdan hisobingiz mavjudmi?
          </p>
          <Link
            className="w-[200px] text-center  border-solid border-[1px] border-[#108a00] text-[#108a00] text-lg  rounded-xl mt-8 p-1"
            to={"/sign-up"}
          >
            Ro'yhatdan O'tish
          </Link>
        </ContainerContent>
      </form>
    </div>
  );
};

export default SignIn;
