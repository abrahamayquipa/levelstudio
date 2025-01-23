"use client"

import { FC } from "react";
import { ColumnsUser } from "@levelstudio/reports";
import { User } from "@levelstudio/types";

interface UserProps {
    rows: User[];
}

export const Users: FC<UserProps> = ({ rows }) => {
    return (
        <table className="w-full mt-4 table-fixed">
            <thead>
                <tr>
                    <td className="w-[85%] px-4 py-2 font-medium">Nombre</td>
                    <td className="px-4 py-2 font-medium">Edad</td>
                    <td className="px-4 py-2 font-medium"></td>
                </tr>
            </thead>
            <tbody>
                <ColumnsUser data={rows}/>
            </tbody>
        </table>
    );
}
