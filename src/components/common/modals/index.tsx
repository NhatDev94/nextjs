"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { ModalProps } from "@/types/modalType";

const Modal = ({
  children,
  open,
  title,
  description,
  modalContent,
  onClose,
}: ModalProps) => {
  const handleOpenChange = (open: boolean) => {
    if (!open && onClose) {
      onClose();
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger className="">{children}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {modalContent}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
