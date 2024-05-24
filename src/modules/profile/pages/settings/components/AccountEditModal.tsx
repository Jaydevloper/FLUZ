import { Input } from "antd";
import ConfirmModal from "components/modal/confirim-modal";
import useForm from "hooks/useForm";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: {
    _id: string;
  };
  refetch: () => void;
}
const AccountEditModal = ({ open = false, setOpen, data, refetch }: IProps) => {
  const { get } = useHooks();
  const { mutate, isLoading } = usePost({
    onSuccess: () => {
      refetch();
      setOpen(false);
      toast.success("Muvaffaqiyatli O'zgartirildi!");
    },
    onError: (err) => {
      toast.error("Xato");
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi"));
    },
  });
  const { handleChange, fields } = useForm();
  return (
    <ConfirmModal
      open={open}
      title="Profileni o'zgartirish"
      onCancel={() => setOpen(false)}
      onOk={() =>
        mutate({
          url: `/auth/edit/${get(data, "_id", "")}`,
          method: "put",
          data: fields,
        })
      }
      okButtonProps={{ loading: isLoading }}
    >
      <Input
        onChange={(e) => handleChange(e)}
        className="mb-4 mt-4"
        placeholder="Foydalanuvchi nomi"
        name="name"
      />
      <Input
        onChange={(e) => handleChange(e)}
        className="mb-4"
        placeholder="Foydalanuvchi email"
        name="email"
      />
    </ConfirmModal>
  );
};

export default AccountEditModal;
