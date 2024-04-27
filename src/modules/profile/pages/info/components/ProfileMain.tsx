const ProFileMain = () => {
  return (
    <div>
      <div className="border-b-[1px] border-solid p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">I'm a frontend developer</h2>
          <p className="text-base font-bold">$10</p>
        </div>
        <p className="text-base mt-4">
          I am a frontend developer, the technologies I know are Html Css Scss
          Boootstrap Javascript React Git Github Real Project. If you trust me,
          I will make you my job
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold">Qobiliyatlar</h2>
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
      </div>
    </div>
  );
};
export default ProFileMain;
