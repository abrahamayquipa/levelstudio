import { useQuery, useSubscription } from "@apollo/client";
import {
    GET_USERS,
    CREATE_USER
} from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useCreateUser = (): [
    (user: User) => Promise<void>,
    boolean,
    Error | undefined
] => {
    const { error, loading, refetch } = useQuery(GET_USERS);

    const createUser = async (user: User): Promise<void> => {
        console.log(user);
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