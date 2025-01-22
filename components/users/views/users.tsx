"use client"

import { FC } from "react";
import { Users as UsersReport } from "@/reports";

export const Users: FC = () => {
    const fakeData = [{name: "panky", age: 20}, {name: "abraham", age: 20}, {name: "jeff", age: 20}];

    return (
        <table className="table w-full">
        <thead  className="table-header-group">
            <tr className="table-row">
                <td className="table-cell text-left">Nombre</td>
                <td className="table-cell text-left">Edad</td>
                <td className="table-cell text-left">Operaciones</td>
            </tr>
        </thead>
        <UsersReport data={fakeData}/>
    </table>
    );
}

export default Users;