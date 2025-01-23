import { useQuery, useSubscription } from "@apollo/client";
import { GET_USERS } from "@levelstudio/schemas"
import { User } from "@levelstudio/types";

export const useGetUsers = (): [
    User[],
    boolean,
    Error | undefined
] => {
    const { data, error, loading, refetch } = useQuery(GET_USERS);

    const usersData = (data?.users || []).map(
        ({ name, age }: any): User => ({
            name,
            age: parseInt(age, 10),
        })
    );
    console.log(usersData);
    /*
    useSubscription(GET_USERS, {
        onSubscriptionData: () => {
            refetch();
        },
    });*/

    return [usersData, loading, error];
};