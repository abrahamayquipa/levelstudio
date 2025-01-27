"use client";

import { useDeleteUser } from "@levelstudio/hooks";
import {
    Button,
    Form
} from "@levelstudio/components/ui";
import { useDialog } from "@levelstudio/contexts/dialog";

export const DeleteUser = ({ userId }: { userId: string }) => {
    const { closeDialog } = useDialog();
    const [deleteUser, loading, error] = useDeleteUser();

    const handleDelete = () => {
        deleteUser(userId);
        closeDialog();
    };

    return (
        <Form>
            <div className="text-center mb-2">
                <p>¿Estás seguro de eliminar este usuario?</p>
            </div>
            <div className="flex justify-center space-x-4">
                <Button
                    onClick={handleDelete}
                    className="w-24 h-[50px] bg-red-600 rounded-xl hover:bg-red-700"
                >
                    Sí
                </Button>
                <Button
                    onClick={closeDialog}
                    className="w-24 h-[50px] bg-[#5f6c37] rounded-xl hover:bg-[#4e5a2d]"
                >
                    No
                </Button>
            </div>
        </Form>
    );
};