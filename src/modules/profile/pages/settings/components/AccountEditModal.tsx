import { Input } from "antd";
import ConfirmModal from "components/modal/confirim-modal";
import { Dispatch, SetStateAction } from "react";
interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const AccountEditModal = ({ open = false, setOpen }: IProps) => {
  return (
    <ConfirmModal
      open={open}
      title="Profileni o'zgartirish"
      onCancel={() => setOpen(false)}
    >
      <Input className="mb-4 mt-4" placeholder="Foydalanuvchi nomi " />
      <Input className="mb-4" placeholder="Foydalanuvchi email" />
      <Input className="mb-4" placeholder="Telefon Raqami" />
    </ConfirmModal>
  );
};

export default AccountEditModal;
