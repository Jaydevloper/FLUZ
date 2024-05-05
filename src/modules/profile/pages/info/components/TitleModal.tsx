import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import { Input } from "antd";

const TitleModal = (props: IPropsModal) => {
  const { open = { titleModal: false }, setOpen } = props;
  return (
    <>
      <ConfirmModal
        open={open?.titleModal}
        title="Title"
        onCancel={() =>
          setOpen({
            titleModal: false,
            skillModal: false,
            educationModal: false,
            profileModal: false,
          })
        }
      >
        <Input placeholder="title" />
      </ConfirmModal>
    </>
  );
};

export default TitleModal;
