import { useMutation } from "@apollo/client";
import {
    GET_USERS,
    UPDATE_USER
} from "@levelstudio/schemas"
import {
    UpdateUserValues,
    EditUserFormValues
} from "@levelstudio/types";

export const useUpdateUser = (): [
    updateUser: (user: UpdateUserValues) => Promise<void>,
    loading: boolean,
    Error | undefined
] => {
    const [updateUser, { error, loading }] = useMutation(UPDATE_USER);

    return [
        async (a: EditUserFormValues): Promise<void> => {
            await updateUser({
                variables: {
                    id: a.id,
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
