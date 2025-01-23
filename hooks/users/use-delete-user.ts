import { useQuery, useSubscription } from "@apollo/client";
import {
    GET_USERS,
    DELETE_USER
} from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useDeleteUser = (): [
    (id: number) => Promise<void>,
    boolean,
    Error | undefined
] => {
    const { error, loading, refetch } = useQuery(GET_USERS);

    const deleteUser = async (id: number): Promise<void> => {
        console.log(id);
        await refetch();
    };
    /*
    useSubscription(DELETE_USER, {
        onSubscriptionData: () => {
            refetch();
        },
    });*/

    return [deleteUser, loading, error];
};
