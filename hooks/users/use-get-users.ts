import { useQuery, useSubscription } from "@apollo/client";
import { GET_USERS } from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useGetUsers = (): [
    User[],
    boolean,
    Error | undefined
] => {
    const { data, error, loading, refetch } = useQuery(GET_USERS);

    const getUsers = (data?.users || []).map(
        ({id, name, lastname, age }: any): User => ({
            id,
            name,
            lastname,
            age,
        })
    );
    console.log(getUsers);
    /*
    useSubscription(GET_USERS, {
        onSubscriptionData: () => {
            refetch();
        },
    });*/

    return [getUsers, loading, error];
};