"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@levelstudio/types";
import { DeleteIcon, EditIcon } from "@levelstudio/components/ui";
import { useDialog } from "@levelstudio/contexts/dialog";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        size: 180,
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "lastname",
        header: "Apellidos",
        size: 180,
        cell: ({ row }) => <div>{row.getValue("lastname")}</div>,
    },
    {
        accessorKey: "age",
        header: "Edad",
        size: 20,
        cell: ({ row }) => <div>{row.getValue("age")}</div>,
    },
    {
        id: "actions",
        header: "",
        size: 20,
        cell: ({ row }) => {
            const { openDialog } = useDialog();

            return (
                <div className="flex space-x-2">
                    <button
                        onClick={() =>
                            openDialog("delete-user", {
                                userId: row.original.id,
                            })
                        }
                    >
                        <DeleteIcon />
                    </button>
                    <button
                        onClick={() =>
                            openDialog("edit-user", {
                                id: row.original.id,
                                initialValues: row.original,
                            })
                        }
                    >
                        <EditIcon />
                    </button>
                </div>
            );
        },
    },
];