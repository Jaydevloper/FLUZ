import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";

const ProfileModal = (props: IPropsModal) => {
  const { open = { profileModal: false }, setOpen } = props;
  return (
    <>
      <ConfirmModal
        open={open?.profileModal}
        title="Profileni O'zgartirish"
        onCancel={() =>
          setOpen({
            titleModal: false,
            skillModal: false,
            educationModal: false,
            profileModal: false,
          })
        }
      ></ConfirmModal>
    </>
  );
};

export default ProfileModal;
