"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@levelstudio/types";
import { DeleteIcon, EditIcon } from "@levelstudio/components/ui";
import { useDialog } from "@levelstudio/contexts/dialog";
import { useDeleteUser } from "@levelstudio/hooks/users/use-delete-user";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        cell: ({ row }) =>
            <div className="w-[40%]">
                {row.getValue("name")}
            </div>,
    },
    {
        accessorKey: "lastname",
        header: "Apellidos",
        cell: ({ row }) =>
            <div className="w-[40%]">
                {row.getValue("lastname")}
            </div>,
    },
    {
        accessorKey: "age",
        header: "Edad",
        cell: ({ row }) =>
            <div className="w-[10%]">
                {row.getValue("age")}
            </div>,
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => {
            const { openDialog } = useDialog();
            const [deleteUser] = useDeleteUser();

            return (
                <div className="flex w-[10%] space-x-8">
                    <button
                        onClick={() =>
                            deleteUser(row.original.id)
                        }
                    >
                        <DeleteIcon/>
                    </button>
                    <button
                        onClick={() =>
                            openDialog("edit-user", {
                                id: row.original.id,
                                initialValues: row.original
                            })
                        }
                    >
                        <EditIcon/>
                    </button>
                </div>
            );
        },
    },
];