"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@levelstudio/types";
import { DeleteIcon, EditIcon } from "@levelstudio/components/ui";

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
            return (
                <div className="flex w-[10%] space-x-8">
                    <button>
                        <DeleteIcon />
                    </button>
                    <button>
                        <EditIcon />
                    </button>
                </div>
            );
        },
    },
];