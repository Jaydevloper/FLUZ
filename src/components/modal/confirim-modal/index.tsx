import { Modal } from "antd";
import { IConfirimProps } from "./confirim.type";

const ConfirmModal = (props: IConfirimProps) => {
  const {
    open = false,
    okText = "Tasdiqlash",
    cacelText = "Bekor qilish",
    title = "",
    children,
    onOk = () => {},
    onCancel = () => {},
    okButtonProps,
    modalProps,
  } = props;

  return (
    <div>
      <Modal
        open={open}
        title={<div className="w-full cursor-move">{title}</div>}
        onCancel={onCancel}
        onOk={onOk}
        okType="primary"
        okText={okText}
        cancelText={cacelText}
        okButtonProps={{
          className: "bg-[#108a00] text-white",
          ...okButtonProps,
        }}
        {...modalProps}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ConfirmModal;
