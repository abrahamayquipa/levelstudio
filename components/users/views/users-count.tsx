"use client"

import { FC } from "react";
import { useGetUsers } from "@levelstudio/hooks";

export const UsersCount: FC = () => {
    const [users, loading, error] = useGetUsers();

    return (
        <div className="mr-2 px-8 py-2 bg-white rounded-xl">
            <span className="font-medium">Total: </span>
            <span className="font-medium text-slate-400">
                {users.length}
            </span>
        </div>
    );
}

export default UsersCount;