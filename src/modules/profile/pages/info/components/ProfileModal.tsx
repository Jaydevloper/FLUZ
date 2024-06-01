import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import Input from "antd/es/input/Input";
import usePost from "hooks/usePost";
import useHooks from "hooks/useHooks";
import { toast } from "react-toastify";
import { useState } from "react";

interface IData extends IPropsModal {
  id: string;
  refetch: () => void;
}

const ProfileModal = (props: IData) => {
  const { get } = useHooks();
  const [fields, setFields] = useState("");
  const { open = { profileModal: false }, setOpen, refetch, id } = props;
  const { mutate, isLoading } = usePost({
    onSuccess: () => {
      refetch();
      setOpen({
        titleModal: false,
        skillModal: false,
        educationModal: false,
        profileModal: false,
      });
    },
    onError: (err) => {
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi"));
    },
  });
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
        onOk={() => {
          mutate({
            url: `/users/edit/${id}`,
            method: "put",
            data: {
              name: fields,
            },
          });
        }}
        okButtonProps={{ loading: isLoading }}
      >
        <Input onChange={(e) => setFields(e.target.value)} placeholder="Nomi" />
      </ConfirmModal>
    </>
  );
};

export default ProfileModal;
