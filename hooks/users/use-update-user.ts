import { useQuery, useSubscription } from "@apollo/client";
import {
    GET_USERS,
    UPDATE_USER
} from "@levelstudio/schemas"

export const useUpdateUser = (): [
    (variables: { id: number; name: string; age: number }) => Promise<void>,
    boolean,
    Error | undefined
] => {
    const { error, loading, refetch } = useQuery(GET_USERS);

    const updateUser = async (variables: { id: number; name: string; age: number }): Promise<void> => {
        console.log(variables);
        await refetch();
    };
    /*
    useSubscription(UPDATE_USER, {
        onSubscriptionData: () => {
            refetch();
        },
    });*/

    return [updateUser, loading, error];
};
