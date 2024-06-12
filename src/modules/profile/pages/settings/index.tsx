import Account from "./components/Account";
import LocationZone from "./components/LocationZone";

const ProfileSettings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-5">Shaxsiy Ma'lumotlar</h1>
      <Account />
      <LocationZone />
    </div>
  );
};

export default ProfileSettings;
