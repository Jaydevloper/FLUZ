import ConfirmModal from "components/modal/confirim-modal";
import { IPropsModal } from "./modal.type";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import usePost from "hooks/usePost";
import { toast } from "react-toastify";
import useHooks from "hooks/useHooks";

interface IData extends IPropsModal {
  id: string;
  refetch: () => void;
}

const TitleModal = (props: IData) => {
  const { get } = useHooks();
  const { open = { titleModal: false }, setOpen, id, refetch } = props;
  const [fields, setFields] = useState({});
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
    onError: (err) =>
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi")),
  });
  return (
    <>
      <ConfirmModal
        open={open?.titleModal}
        title="Sarlavha"
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
            data: fields,
          });
        }}
        okButtonProps={{ loading: isLoading }}
      >
        <Input
          onChange={(e) => setFields({ ...fields, title: e.target.value })}
          className="mb-2"
          placeholder="sarlavha"
        />
        <Input
          type="number"
          onChange={(e) => setFields({ ...fields, payment: e.target.value })}
          className="mb-2"
          placeholder="to'lov"
        />
        <TextArea
          onChange={(e) =>
            setFields({ ...fields, description: e.target.value })
          }
          placeholder="qo'shimcha"
        ></TextArea>
      </ConfirmModal>
    </>
  );
};

export default TitleModal;
