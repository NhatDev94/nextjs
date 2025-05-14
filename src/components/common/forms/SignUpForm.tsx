"use client";

import { useForm } from "react-hook-form";
import Form from ".";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  const SignInSchema = z.object({
    email: z.string().email({ message: "Email khong dung roi" }).min(1, {
      message: "Must enter email",
    }),
    password: z.string().min(1, {
      message: "Must enter password",
    }),
    confirmPassword: z.string().min(1, {
      message: "Must enter confirm password",
    }),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      form={form}
      formItems={[
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
        {
          name: "confirmPassword",
          label: "Confirm Password",
          placeholder: "Enter your confirm password",
          type: "password",
        },
      ]}
      submitText="Sign Up"
      onSubmit={handleSubmit}
    />
  );
}
