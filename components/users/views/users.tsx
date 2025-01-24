"use client"

import { FC } from "react";
import { Users as UsersReport } from "@levelstudio/reports";
import { useGetUsers } from "@levelstudio/hooks";

export const Users: FC = () => {
    const [users, loading, error] = useGetUsers();

    return (
        <UsersReport rows={users} />
    );
}

export default Users;