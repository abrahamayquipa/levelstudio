"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateUser } from "@levelstudio/hooks";

import {
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from "@levelstudio/components/ui";

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    lastname: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
    age: z
        .number()
        .min(1, { message: "La edad debe ser mayor a 0." })
        .max(100, { message: "La edad debe ser menor a 120." }),
});

type FormValues = z.infer<typeof formSchema>;

interface EditUser {
    initialValues: FormValues;
}

export const EditUser = ({ initialValues }: EditUser) => {
    const [updateUser, loading, error] = useUpdateUser();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (values: FormValues) => {
        updateUser(values);
        console.log(values);
    };

    return (
        <Form {...form}>
            <div className="bg-white rounded p-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe tu nombre" {...field} />
                            </FormControl>
                            <FormDescription>Por favor, introduce tu nombre.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe tus apellidos" {...field} />
                            </FormControl>
                            <FormDescription>Por favor, introduce tus apellidos.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Edad</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Escribe tu edad"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)}
                                />
                            </FormControl>
                            <FormDescription>Introduce tu edad en años.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Editar</Button>
            </div>
        </Form>
    );
};