import { Button } from "@/components/shadcn/button";
import {
  Form as FormRoot,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/Input";
import { Textarea } from "@/components/shadcn/textarea";

type FormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formItems: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  submitText: string;
};

export default function Form({
  form,
  formItems,
  submitText = "Submit",
  onSubmit,
}: FormProps) {
  return (
    <FormRoot {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {formItems.map((item: any, i: number) => (
          <div className="mb-4" key={i}>
            <FormField
              control={form.control}
              name={item.name}
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>{renderInput(field, item)}</FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <Button className="w-full mt-8" type="submit">
          {submitText}
        </Button>
      </form>
    </FormRoot>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderInput = (field: any, item: any) => {
  switch (item.input.type) {
    case "textarea":
      return <Textarea {...field} {...item.input} />;
    case "file":
      return (
        <Input
          {...item.input}
          type="file"
          accept={item.input.accept}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            const file = e.target.files[0];
            field.onChange(file);
          }}
        />
      );

    default:
      return <Input {...field} {...item.input} />;
  }
};
