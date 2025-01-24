import { useMutation } from "@apollo/client";
import { GET_USERS, DELETE_USER } from "@levelstudio/schemas";

export const useDeleteUser = (): [
    deleteUser: (id: string) => Promise<void>,
    loading: boolean,
    Error | undefined
] => {
    const [deleteUser, { loading, error }] = useMutation(DELETE_USER);

    return [
        async (id: string) => {
            await deleteUser({
                variables: { id },
                refetchQueries: [{ query: GET_USERS }],
            });
        },
        loading,
        error
    ];
};