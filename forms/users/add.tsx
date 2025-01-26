"use client";

import { useForm } from "react-hook-form";
import { useCreateUser } from "@levelstudio/hooks";
import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    Input,
} from "@levelstudio/components/ui";
import { useDialog } from "@levelstudio/contexts/dialog";

export const AddUser = () => {
    const { closeDialog } = useDialog();
    const [createUser, loading, error] = useCreateUser();

    const form = useForm({
        defaultValues: {
            name: "",
            lastname: "",
            age: ""
        },
    });

    const onSubmit = (values: any) => {
        createUser(values);
        closeDialog();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="mb-8 bg-transparent">
                            <label
                                htmlFor="nombre"
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
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem className="mb-8 bg-transparent">
                            <label
                                htmlFor="nombre"
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
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem className="mb-12 bg-transparent">
                            <label
                                htmlFor="nombre"
                                className="mb-4 font-light text-[#a5a5a5]"
                            >
                                Edad
                            </label>
                            <FormControl>
                                <Input
                                    className="font-light placeholder:text-[#a5a5a5] rounded-xl border-0 focus:outline-none focus:ring-0"
                                    placeholder="Escribe tu edad"
                                    {...field}
                                />
                            </FormControl>
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