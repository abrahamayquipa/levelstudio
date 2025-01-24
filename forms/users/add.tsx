"use client";

import { useForm } from "react-hook-form";
import { useCreateUser } from "@levelstudio/hooks";

import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    Input,
} from "@levelstudio/components/ui";

export const AddUser = () => {
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
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe tu nombre" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe tus apellidos" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Edad</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe tu edad" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Añadir</Button>
            </form>
        </Form>
    );
};