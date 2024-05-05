import { DatePicker } from "antd";
import List from "./components/List";

const MyJobs = () => {
  return (
    <div className="pt-8">
      <DatePicker
        className="w-[300px]"
        width={500}
        placeholder="Sana bo'yicha qidiruv"
      />
      <List />
    </div>
  );
};

export default MyJobs;
