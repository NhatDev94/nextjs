"use client";

import { useForm } from "react-hook-form";
import Form from ".";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddProductForm({
  onSubmit,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}) {
  const SignInSchema = z.object({
    name: z.string().min(1, {
      message: "Vui lòng nhập tên sản phẩm",
    }),
    description: z.string(),
    price: z.string().min(1, {
      message: "Vui lòng nhập giá sản phẩm",
    }),
    madeIn: z.string().min(1, {
      message: "Vui lòng nhập nơi sản xuất",
    }),
    images: z.any(),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      madeIn: "",
      images: null,
    },
    resolver: zodResolver(SignInSchema),
  });

  return (
    <Form
      form={form}
      formItems={[
        {
          name: "name",
          label: "Name",
          input: {
            placeholder: "Enter product name...",
          },
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          input: {
            placeholder: "Enter product description...",
          },
        },
        {
          name: "price",
          label: "Price",
          input: {
            placeholder: "Enter product price...",
          },
        },
        {
          name: "madeIn",
          label: "Made In",
          input: {
            placeholder: "Enter product made in...",
          },
        },
        {
          name: "images",
          label: "Images",
          input: {
            type: "file",
            accept: "image/*",
          },
        },
      ]}
      submitText="Add Product"
      onSubmit={onSubmit}
    />
  );
}
