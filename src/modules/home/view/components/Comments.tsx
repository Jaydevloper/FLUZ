import { Button, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { useState } from "react";
import { toast } from "react-toastify";

const Comments = () => {
  const { get, params } = useHooks();
  const [fields, setFields] = useState({});
  const { mutate, isLoading } = usePost({
    onSuccess: () => {
      toast.success("Izoh muvaffaqiyatli yuborildi");
    },
    onError: (err) => {
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi"));
    },
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    mutate({
      url: "/jobs/comment/create",
      method: "post",
      data: { ...fields, id: get(params, "id", "") },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-solid border-[1px] rounded-s-lg mt-12 p-8">
        <h2 className="text-2xl font-semibold">Izohalar</h2>
        <div className="flex itmes-center flex-col gap-3 w-[200px] mt-8">
          <label className="text-base font-semibold">
            Ishni Vaqtini Belgilang
          </label>
          <DatePicker
            onChange={(_, value) => setFields({ ...fields, date: value })}
            placeholder="Vaqtni Belgilash "
          />
        </div>
        <div className="flex itmes-center flex-col gap-3  mt-4">
          <label className="text-base font-semibold">
            Bu yerdagi Izohda ish beruvchini jalb qilish uchun
          </label>
          <TextArea
            onChange={(e) => setFields({ ...fields, text: e.target.value })}
            placeholder="Izoh..."
          ></TextArea>
        </div>
        {/* <h2 className="text-2xl font-semibold mt-8">CV,Rezume</h2> */}
      </div>
      <Button
        htmlType="submit"
        loading={isLoading}
        className=" mt-8 text-base font-semibold bg-[#108a00] text-white w-[200px] rounded-lg"
      >
        Yuborish
      </Button>
    </form>
  );
};
export default Comments;
