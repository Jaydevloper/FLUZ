import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";

const Comments = () => {
  return (
    <div>
      <div className="border-solid border-[1px] rounded-s-lg mt-12 p-8">
        <h2 className="text-2xl font-semibold">Izohalar</h2>
        <div className="flex itmes-center flex-col gap-3 w-[200px] mt-8">
          <label className="text-base font-semibold">
            Ishni Vaqtini Belgilang
          </label>
          <DatePicker placeholder="Vaqtni Belgilash " />
        </div>
        <div className="flex itmes-center flex-col gap-3  mt-4">
          <label className="text-base font-semibold">
            Bu yerdagi Izoh ish beruvchini jalb qilish uchun
          </label>
          <TextArea placeholder="Izoh..."></TextArea>
        </div>
        <h2 className="text-2xl font-semibold mt-8">CV,Rezume</h2>
        <Upload className="mt-4">
          <Button className="mt-4" icon={<UploadOutlined />}>
            Yuklash
          </Button>
        </Upload>
      </div>
      <Button className=" mt-8 text-base font-semibold bg-[#108a00] text-white w-[200px] rounded-lg">
        Yuborish
      </Button>
    </div>
  );
};
export default Comments;
