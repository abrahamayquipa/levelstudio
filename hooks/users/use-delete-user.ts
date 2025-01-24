import { useMutation } from "@apollo/client";
import { DELETE_USER } from "@levelstudio/schemas";
import { User } from "@levelstudio/types";

export const useDeleteUser = (): [
    (id: string) => Promise<void>,
    boolean,
        Error | undefined
] => {
    const [deleteUserMutation, { loading, error }] = useMutation(DELETE_USER);

    const deleteUser = async (id: string) => {
        try {
            await deleteUserMutation({
                variables: { id },
            });
            console.log(`User with id ${id} deleted successfully.`);
        } catch (e) {
            console.error("Error deleting user:", e);
        }
    };

    return [deleteUser, loading, error];
};