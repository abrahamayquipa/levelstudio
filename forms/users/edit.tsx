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

export const EditUser = ({ initialValues }: any) => {
    const [updateUser, loading, error] = useUpdateUser();

    const form = useForm({
        defaultValues: {
            id: initialValues.id,
            name: initialValues.name,
            lastname: initialValues.lastname,
            age: initialValues.age,
        }
    });

    const onSubmit = (values: any) => {
        console.log(values);
        updateUser(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white">
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
            </form>
        </Form>
    );
};