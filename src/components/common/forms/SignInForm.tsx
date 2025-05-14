"use client";

import { useForm } from "react-hook-form";
import Form from ".";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInForm({
  onSubmit,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}) {
  const SignInSchema = z.object({
    email: z.string().email({ message: "Email khong dung roi" }).min(1, {
      message: "Must enter email",
    }),
    password: z.string().min(1, {
      message: "Must enter password",
    }),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  return (
    <Form
      form={form}
      formItems={[
        {
          name: "email",
          label: "Email",
          input: {
            placeholder: "Enter your email",
            type: "email",
          },
        },
        {
          name: "password",
          label: "Password",
          input: {
            placeholder: "Enter your password",
            type: "password",
          },
        },
      ]}
      submitText="Sign In"
      onSubmit={onSubmit}
    />
  );
}
