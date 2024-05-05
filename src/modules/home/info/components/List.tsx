import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <ul>
        <li className="bg-[#f1f1f1] p-4 rounded-sm">
          <Link className="text-[#108a00] text-base font-bold" to="/detail/2">
            Front-end Developer | Web Design | HTML, CSS, Bootstrap and JS
            required for new pages
          </Link>
          <p className="text-base my-4">
            Required Front-end Developer, Web Design, HTML, CSS, Bootstrap, to
            add more pages to existing website. And to make few changes.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#676767] font-bold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
              React
            </span>
            <span className="text-[#676767] font-bold text-base rounded-3xl px-3 py-2 bg-[#e9e9e9]">
              Node js
            </span>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-base text-[#676767] font-semibold ">
              Payment
            </span>
            <span className="text-base font-semibold text-[#676767] ">$1k</span>
            <span className="text-base font-semibold text-[#676767] ">UZB</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
