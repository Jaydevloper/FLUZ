import { Select } from "antd";
import ConfirmModal from "components/modal/confirim-modal";
import { data } from "data";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { useState } from "react";
import { toast } from "react-toastify";
import { IPropsModal } from "./modal.type";
interface IData extends IPropsModal {
  id: string;
  refetch: () => void;
}
const SkillModal = (props: IData) => {
  const { get } = useHooks();
  const { open = { skillModal: false }, setOpen, refetch, id } = props;
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
        onOk={() => {
          mutate({
            url: `/users/edit/${id}`,
            method: "put",
            data: fields,
          });
        }}
        okButtonProps={{ loading: isLoading }}
      >
        <Select
          mode="tags"
          onChange={(e) => setFields({ ...fields, skills: e })}
          className="w-[473px]"
          tokenSeparators={[","]}
          options={data?.skills}
        />
      </ConfirmModal>
    </>
  );
};

export default SkillModal;
