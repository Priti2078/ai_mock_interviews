import {Input} from "@/components/ui/input";
import {Controller, Control,FieldValues, Path} from "react-hook-form";
import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    local: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';

}

const FormField = ({control, name, label, placeholder, type = "text"}: FormFieldProps<T>)=> (
      <Controller
          name={name}
          control={control}
          render={({field})=> (
        <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                      {...field}
                />
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />
);

export default FormField
