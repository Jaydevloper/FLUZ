import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import { Input } from "antd";

const EducationModal = (props: IPropsModal) => {
  const { open = { educationModal: false }, setOpen } = props;
  return (
    <>
      <ConfirmModal
        open={open?.educationModal}
        title="Ta'lim"
        onCancel={() =>
          setOpen({
            titleModal: false,
            skillModal: false,
            educationModal: false,
            profileModal: false,
          })
        }
      >
        <Input placeholder="ta'lim" />
      </ConfirmModal>
    </>
  );
};

export default EducationModal;
