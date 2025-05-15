import { ModalProps } from "@/types/modalType";
import Modal from ".";
import AddProductForm from "../forms/AddProductForm";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/indext";

export default function AddProductModal(props: ModalProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadImage = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.images);
    formData.append("upload_preset", "MiaChan House");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dabpnlvpt/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    return res.url;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addProductToFireStore = async (product: any) => {
    await setDoc(doc(db, "products", product.id), product);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (data: any) => {
    const url = await uploadImage(data);

    await addProductToFireStore({
      id: String(Date.now()),
      name: data.name,
      description: data.description,
      price: data.price,
      madeIn: data.madeIn,
      url,
    });

    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <Modal
      {...props}
      modalContent={<AddProductForm onSubmit={handleSubmit} />}
    />
  );
}
