import { Avatar } from "antd";
import GeoLocationIcon from "assets/icons/GeoLocationIcon";
import dayjs from "dayjs";
import useGeoLocation from "hooks/useGeoLocation";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  const { region, country } = useGeoLocation();

  return (
    <div className="flex items-center justify-between border-b-[1px] border-solid p-8 ">
      <div className="flex items-center">
        <Avatar
          className="bg-[#f56a00] w-[88px] h-[88px] mb-2"
          size="large"
          gap={1}
        >
          U
        </Avatar>
        <div className="ml-2">
          <h1 className="font-semibold text-2xl">User</h1>
          {region && country ? (
            <p className="text-[#676767] flex items-center">
              <GeoLocationIcon />
              {`${region}, ${country}-${dayjs(new Date()).format(
                "HH:mm"
              )} Hozirgi vaqt`}
            </p>
          ) : null}
        </div>
      </div>
      <Link to={"/"}>
        <div className="text-white text-base font-semibold bg-[#108a00] rounded-3xl px-3 py-3">
          {" "}
          Profile O'zgartirish
        </div>
      </Link>
    </div>
  );
};

export default ProfileHeader;
