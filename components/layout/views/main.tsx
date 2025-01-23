"use client"

import { Users, UsersCount } from "@levelstudio/components/users"
import { AddDialog } from "@levelstudio/components/users/controls/add-dialog";

export const Main = () => {
    return (
        <section className="w-full mx-8">
            <article className="flex justify-end items-center w-full my-4">
                <UsersCount/>
                <AddDialog />
            </article>
            <Users />
        </section>
    );
};