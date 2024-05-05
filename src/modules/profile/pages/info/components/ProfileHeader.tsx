import { Avatar, Button } from "antd";
import GeoLocationIcon from "assets/icons/GeoLocationIcon";
import dayjs from "dayjs";
import useGeoLocation from "hooks/useGeoLocation";
import { IPropsModal } from "./modal.type";
import ProfileModal from "./ProfileModal";

const ProfileHeader = ({ open, setOpen }: IPropsModal) => {
  const { region, country } = useGeoLocation();

  return (
    <>
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
        <Button
          onClick={() => setOpen({ ...open, profileModal: true })}
          className="text-white text-base font-semibold bg-[#108a00] rounded-3xl px-3 py-3 pb-8"
        >
          {" "}
          Profile O'zgartirish
        </Button>
      </div>
      <ProfileModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ProfileHeader;
