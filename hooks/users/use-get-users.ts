"use client";

import { User } from "@/types";
import { fetchUsers } from "@/services/fetch-users";
import { useEffect, useState } from "react";

export const useGetUsers = ({
    search,
    pageSize,
} : {
    search: string;
    pageSize?: number;
}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(search ? true : false);

    const getUsers = async () => {
        try {
            if (search) {
                setLoading(true);
                const requestedUsers = await fetchUsers({ search, pageSize });
                setUsers(requestedUsers);
                setError("");
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                setUsers([]);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (search) {
            getUsers();
        }
    }, [search, pageSize]);

    return { users, loading, error };
};
