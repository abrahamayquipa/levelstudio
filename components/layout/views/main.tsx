"use client"

import { Users, UsersCount, OpenDialog } from "@/components/users"

export const Main = () => {
    return (
        <section className="w-full">
            <article className="flex justify-end items-center w-full my-8">
                <UsersCount/>
                <OpenDialog />
            </article>
            <Users />
        </section>
    );
};