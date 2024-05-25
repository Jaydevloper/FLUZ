import TextArea from "antd/es/input/TextArea";
import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import usePost from "hooks/usePost";
import { toast } from "react-toastify";
import useHooks from "hooks/useHooks";
import { useState } from "react";

interface IData extends IPropsModal {
  id: string;
  refetch: () => void;
}
const EducationModal = (props: IData) => {
  const { get } = useHooks();
  const [fields, setFields] = useState("");
  const { open = { educationModal: false }, setOpen, id, refetch } = props;
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
        onOk={() => {
          mutate({
            url: `/users/edit/${id}`,
            method: "put",
            data: {
              education: fields,
            },
          });
        }}
        okButtonProps={{ loading: isLoading }}
      >
        <TextArea
          onChange={(e) => setFields(e.target.value)}
          placeholder="ta'lim"
        ></TextArea>
      </ConfirmModal>
    </>
  );
};

export default EducationModal;
