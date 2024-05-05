import { SendOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import ContainerContent from "components/container-content";

const CreateFields = () => {
  return (
    <div>
      <ContainerContent>
        <h2 className="text-lg font-bold">Ish haqida ma'lumotlar</h2>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <section>
              <label className="text-base mb-2 font-semibold" htmlFor="title">
                Sarlavha
              </label>
              <Input id="title" />
            </section>
            <section className="">
              <label className="text-base mb-2 font-semibold" htmlFor="type">
                Turi
              </label>
              <Select className="w-[300px] block" id="type">
                <Select.Option value="1">Ish</Select.Option>
              </Select>
            </section>
            <section>
              <label className="text-base mb-2 font-semibold" htmlFor="skills">
                Qobiliyatlar
              </label>
              <Select className="w-[300px] block" id="skills">
                <Select.Option value="1">HTML</Select.Option>
              </Select>
            </section>
          </div>
          <label
            className="text-base mt-6 font-semibold inline-block"
            htmlFor="description"
          >
            Qo'shimcah Izohlar
          </label>
          <TextArea className="mt-3" id="description"></TextArea>
          <label className="text-base mt-6 font-semibold block" htmlFor="file">
            Qo'shimcah fayllarni yuklash
          </label>
          <Upload className="mt-0" id="file">
            <Button className="mt-4" icon={<UploadOutlined />}>
              Yuklash
            </Button>
          </Upload>
        </div>
      </ContainerContent>
      <Button
        className="bg-[#108a00] text-white w-[300px] mt-8 ml-auto mr-auto block"
        htmlType="submit"
        icon={<SendOutlined />}
      >
        Yuborish
      </Button>
    </div>
  );
};

export default CreateFields;
