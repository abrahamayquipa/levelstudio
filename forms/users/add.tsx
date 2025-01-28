"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Input,
} from "@levelstudio/components/ui";
import { useDialog } from "@levelstudio/contexts/dialog";
import {
    useGetUsers,
    useCreateUser
} from "@levelstudio/hooks";

const userSchema = z.object({
    name: z
        .string()
        .regex(/^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]+$/, "El nombre solo puede contener letras y espacios.")
        .min(1, "El nombre es obligatorio."),
    lastname: z
        .string()
        .regex(/^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]+$/, "El apellido solo puede contener letras y espacios.")
        .min(1, "El apellido es obligatorio."),
    age: z
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => !isNaN(val), {
            message: "La edad debe ser un número válido.",
        })
        .refine((val) => val > 0 && val < 80, {
            message: "La edad debe estar entre 0 y 80.",
        }),
});

export const AddUser = () => {
    const { closeDialog } = useDialog();
    const [createUser, loading, error] = useCreateUser();
    const [users, usersLoading] = useGetUsers();

    const form = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            lastname: "",
            age: "",
        },
    });

    const onSubmit = async (values: any) => {
        const userExists = users.some(
            (user) =>
                user.name.toLowerCase() === values.name.toLowerCase() &&
                user.lastname.toLowerCase() === values.lastname.toLowerCase()
        );

        if (userExists) {
            form.setError("name", {
                type: "manual",
                message: "Ya existe un usuario con este nombre y apellido.",
            });
            form.setError("lastname", {
                type: "manual",
                message: "Ya existe un usuario con este nombre y apellido.",
            });
            return;
        }

        await createUser(values);
        closeDialog();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-8 bg-transparent">
                            <label
                                htmlFor="name"
                                className="mb-4 font-light text-[#a5a5a5]"
                            >
                                Nombre
                            </label>
                            <FormControl>
                                <Input
                                    className="font-light placeholder:text-[#a5a5a5] rounded-xl border-0 focus:outline-none focus:ring-0"
                                    placeholder="Escribe tu nombre"
                                    {...field}
                                />
                            </FormControl>
                            {fieldState.error?.message && (
                                <span className="text-sm text-red-500">
                                    {fieldState.error.message}
                                </span>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-8 bg-transparent">
                            <label
                                htmlFor="lastname"
                                className="mb-4 font-light text-[#a5a5a5]"
                            >
                                Apellidos
                            </label>
                            <FormControl>
                                <Input
                                    className="font-light placeholder:text-[#a5a5a5] rounded-xl border-0 focus:outline-none focus:ring-0"
                                    placeholder="Escribe tus apellidos"
                                    {...field}
                                />
                            </FormControl>
                            {fieldState.error?.message && (
                                <span className="text-sm text-red-500">
                                    {fieldState.error.message}
                                </span>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-12 bg-transparent">
                            <label htmlFor="age" className="mb-4 font-light text-[#a5a5a5]">
                                Edad
                            </label>
                            <FormControl>
                                <Input
                                    type="number"
                                    className="font-light placeholder:text-[#a5a5a5] rounded-xl border-0 focus:outline-none focus:ring-0"
                                    placeholder="Escribe tu edad"
                                    {...field}
                                />
                            </FormControl>
                            {fieldState.error?.message && (
                                <span className="text-sm text-red-500">
                                    {fieldState.error.message}
                                </span>
                            )}
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full h-[50px] bg-[#5f6c37] rounded-xl"
                >
                    Añadir
                </Button>
            </form>
        </Form>
    );
};