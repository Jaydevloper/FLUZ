const Details = () => {
  return (
    <div className="border-solid border-[1px] rounded-s-lg mt-12 p-8">
      <h2 className="text-2xl font-semibold">Ish Haqida</h2>
      <h3 className="text-lg font-semibold mt-7">Malumot</h3>
      <div className="flex items-center gap-2 mt-6">
        <h4 className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
          Frontend development
        </h4>
        <p className="text-base">Posted today</p>
      </div>
      <p className="text-base mt-4">
        I'm looking for a talented HTML, JS, and CSS developer who can create
        very basic & clean code and clone a webpage Can you clone this page?
        Just use HTML, create a clone, and upload it to Netlify or Vercel to
        show it.
      </p>
      <div className="border-solid border-t-[1px] mt-9 pt-5 ">
        <h2 className="text-lg font-semibold">Qobiliyatlar</h2>
        <ul className="flex items-center gap-2 mt-6">
          <li className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            Html
          </li>
          <li className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            Css
          </li>
          <li className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            Scss
          </li>
          <li className="text-[#676767] font-semibold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
            JS
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Details;
