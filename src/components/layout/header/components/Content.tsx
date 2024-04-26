import { Avatar } from "antd";
import LogoutIcon from "assets/icons/LogoutIcon";
import SettingsIcon from "assets/icons/SettingsIcon";
import useHooks from "hooks/useHooks";
import { Link } from "react-router-dom";

const ContentHeader = () => {
  const { navigate } = useHooks();
  return (
    <div>
      <ul className="flex flex-col gap-3 p-4">
        <li className="flex flex-col items-center justify-center">
          <Avatar
            onClick={() => navigate("/profile")}
            className="bg-[#f56a00] cursor-pointer w-[88px] h-[88px] mb-2"
            size="large"
            gap={1}
          >
            U
          </Avatar>
          <h1 className="text-base text-black font-semibold m-0">User</h1>
          <h2 className="text-base text-[#b6afaf] ">Freelancer</h2>
        </li>
        <li>
          <Link
            className="text-base py-3 text-[#000] flex items-center gap-2 "
            to="/"
          >
            <SettingsIcon />
            Sozlamalar
          </Link>
        </li>
        <li>
          <Link
            className="text-base py-3 text-[#000] flex items-center gap-2"
            to={"/"}
          >
            <LogoutIcon />
            Chiqish
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContentHeader;
