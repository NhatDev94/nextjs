import {
  Form as FormRoot,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "../shadcn/Input";
import { Button } from "../shadcn/button";

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
                  <FormControl>
                    <Input {...field} {...item.input} />
                  </FormControl>
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
