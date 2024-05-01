import ProfileFooter from "./components/ProfileFooter";
import ProfileHeader from "./components/ProfileHeader";
import ProFileMain from "./components/ProfileMain";

const ProfileInfo = () => {
  return (
    <div>
      <div className="border-solid border-[1px] rounded-s-lg mt-12 ">
        <ProfileHeader />
        <ProFileMain />
      </div>
      <footer>
        <ProfileFooter />
      </footer>
    </div>
  );
};
export default ProfileInfo;
