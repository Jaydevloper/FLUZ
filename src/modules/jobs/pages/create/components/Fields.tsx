import { SendOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import ContainerContent from "components/container-content";
import { data } from "data";
import useGeoLocation from "hooks/useGeoLocation";
import useHooks from "hooks/useHooks";

import usePost from "hooks/usePost";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateFields = () => {
  const { navigate, get } = useHooks();
  const { mutate, isLoading } = usePost({
    onSuccess: () => {
      toast.success("Muvaffaqiyatli Yuborildi!");
      navigate("/");
    },
    onError: (err) => {
      toast.error("Yuborilmadi");
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi"));
    },
  });
  const { country, region } = useGeoLocation();
  const [inputs, setInputs] = useState({});
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      formData.append(key, value as string);
    }
    formData.append(
      "country",
      country && region ? `${country},${region}` : "Mavjud Emas"
    );
    mutate({
      url: "/jobs/create",
      method: "post",
      data: formData,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ContainerContent>
          <h2 className="text-lg font-bold">Ish haqida ma'lumotlar</h2>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <section>
                <label className="text-base mb-2 font-semibold" htmlFor="title">
                  Sarlavha
                </label>
                <Input
                  id="title"
                  onChange={(e) =>
                    setInputs({ ...inputs, title: e.target.value })
                  }
                />
              </section>
              <section className="">
                <label className="text-base mb-2 font-semibold" htmlFor="type">
                  Ish Turi
                </label>
                <Input
                  id="type"
                  onChange={(e) =>
                    setInputs({ ...inputs, type: e.target.value })
                  }
                />
              </section>
              <section className="flex flex-col">
                <label
                  className="text-base  font-semibold mb-0"
                  htmlFor="skills"
                >
                  Qobiliyatlar
                </label>
                <Select
                  mode="tags"
                  onChange={(e) => setInputs({ ...inputs, skills: e })}
                  className="w-[200px]"
                  tokenSeparators={[","]}
                  options={data?.skills}
                />
              </section>
              <section>
                <label className="text-base mb-2 font-semibold" htmlFor="price">
                  Narx
                </label>
                <Input
                  type="number"
                  id="price"
                  onChange={(e) =>
                    setInputs({ ...inputs, payment: e.target.value })
                  }
                />
              </section>
            </div>

            <label
              className="text-base mt-6 font-semibold inline-block"
              htmlFor="description"
            >
              Qo'shimcah Izohlar
            </label>

            <TextArea
              onChange={(e) =>
                setInputs({ ...inputs, additionalInfo: e.target.value })
              }
              className="mt-3"
              id="description"
            ></TextArea>
            <label
              className="text-base mt-6 font-semibold block"
              htmlFor="file"
            >
              Qo'shimcah fayllarni yuklash
            </label>
            <input
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  files: e.target.files ? e.target.files[0] : null,
                })
              }
              className="visually-hidden"
              type="file"
              id="file"
            />
            <Button
              loading={isLoading}
              id="file"
              className="mt-4"
              icon={<UploadOutlined />}
              onClick={() => document.getElementById("file")?.click()}
            >
              Yuklash
            </Button>
          </div>
        </ContainerContent>
        <Button
          className="bg-[#108a00] text-white w-[300px] mt-8 ml-auto mr-auto block"
          htmlType="submit"
          icon={<SendOutlined />}
        >
          Yuborish
        </Button>
      </form>
    </div>
  );
};

export default CreateFields;
