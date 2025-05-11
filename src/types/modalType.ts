export type ModalProps = {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  description?: string;
  modalContent?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
};
