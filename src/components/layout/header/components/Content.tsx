import { Link } from "react-router-dom";

const ContentHeader = () => {
  return (
    <div>
      <ul className="flex flex-col gap-3 p-4">
        <li>
          <Link className="text-base py-3" to="/">
            Sozlamalar
          </Link>
        </li>
        <li>
          <Link className="text-base py-3" to={"/"}>
            Chiqish
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContentHeader;
