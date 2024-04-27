import { DatePicker, Input } from "antd";

const HistoryHeader = () => {
  return (
    <div className="pt-8">
      <h1 className="text-3xl font-bold mb-6 ">To'lov Tarixi</h1>
      <h2 className="text-xl font-semibold">
        Hisob: <span className="text-[#108a00]">$10000 0000 0000</span>
      </h2>
      <div className="flex justify-between mt-10">
        <div className="flex  flex-col">
          <label className="text-base font-semibold mb-2">Sana</label>
          <DatePicker
            className="w-[300px]"
            placeholder="Sana bo'yicha qidiruv"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-semibold mb-2">Qidirish</label>
          <Input className="w-[300px]" type="search" placeholder="Qidiruv..." />
        </div>
      </div>
    </div>
  );
};

export default HistoryHeader;
