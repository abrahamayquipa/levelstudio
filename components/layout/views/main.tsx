"use client"

import { Users, UsersCount, OpenDialog } from "@levelstudio/components/users"

export const Main = () => {
    return (
        <section className="w-full mx-8">
            <article className="flex justify-end items-center w-full my-4">
                <UsersCount/>
                <OpenDialog />
            </article>
            <Users />
        </section>
    );
};