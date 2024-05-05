import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import { Input } from "antd";

const SkillModal = (props: IPropsModal) => {
  const { open = { skillModal: false }, setOpen } = props;
  return (
    <>
      <ConfirmModal
        open={open?.skillModal}
        title="Qobiliyatlar"
        onCancel={() =>
          setOpen({
            titleModal: false,
            skillModal: false,
            educationModal: false,
            profileModal: false,
          })
        }
      >
        <Input placeholder="qobilyat" />
      </ConfirmModal>
    </>
  );
};

export default SkillModal;
