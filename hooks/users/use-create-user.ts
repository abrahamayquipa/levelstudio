import { useQuery, useSubscription } from "@apollo/client";
import {
    GET_USERS,
    CREATE_USER
} from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useCreateUser = (): [
    (user: { name: string; age: number }) => Promise<void>,
    boolean,
    Error | undefined
] => {
    const { error, loading, refetch } = useQuery(GET_USERS);

    const createUser = async (user: { name: string; age: number }): Promise<void> => {
        console.log(`Creating user: ${JSON.stringify(user)}`);
        await refetch();
    };
/*
    useSubscription(CREATE_USER, {
        onSubscriptionData: () => {
            refetch();
        },
    });*/

    return [createUser, loading, error];
};