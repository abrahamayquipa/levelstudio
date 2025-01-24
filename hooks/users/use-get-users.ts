import { useQuery } from "@apollo/client";
import { GET_USERS } from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useGetUsers = (): [
    users: User[],
    loading: boolean,
    Error | undefined
] => {
    const { data, error, loading, refetch } = useQuery(GET_USERS);

    const getUsers = (data?.users || [])
        .map(({ id, name, lastname, age }: User) => ({
            id,
            name,
            lastname,
            age,
        })
    );

    return [getUsers, loading, error];
};