import { ButtonProps, ModalProps } from "antd";

export interface IConfirimProps {
  open: boolean;
  title?: string;
  okText?: string;
  cacelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  okButtonProps?: ButtonProps;
  modalProps?: ModalProps;
}
