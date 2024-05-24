import { Avatar } from "antd";
import LogoutIcon from "assets/icons/LogoutIcon";
import SettingsIcon from "assets/icons/SettingsIcon";
import { SignOut } from "features/auth";
import useHooks from "hooks/useHooks";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ContentHeader = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { navigate } = useHooks();
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="flex flex-col gap-3 p-4">
        <li className="flex flex-col items-center justify-center">
          <Avatar
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
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
            onClick={() => setOpen(false)}
            to="/profile/settings"
          >
            <SettingsIcon />
            Sozlamalar
          </Link>
        </li>
        <li>
          <button
            className="text-base py-3 text-[#000] flex items-center gap-2 hover:text-[#69b1ff]"
            onClick={() => {
              dispatch(SignOut());
            }}
          >
            <LogoutIcon />
            Chiqish
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ContentHeader;
