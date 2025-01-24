import { useMutation } from "@apollo/client";
import {
    GET_USERS,
    CREATE_USER
} from "@levelstudio/schemas"
import {
    NewUserValues,
    AddUserFormValues
} from "@levelstudio/types";

export const useCreateUser = (): [
    createUser: (user: NewUserValues) => Promise<void>,
    loading: boolean,
    Error | undefined
] => {
    const [createUser, { error, loading }] = useMutation(CREATE_USER);

    return [
        async (a: AddUserFormValues): Promise<void> => {
            await createUser({
                variables: {
                    name: a.name,
                    lastname: a.lastname,
                    age: a.age,
                },
                refetchQueries: [{ query: GET_USERS }],
            });
        },
        loading,
        error
    ];
};