"use client"

import { FC } from "react";
import { ColumnsUser } from "@levelstudio/reports";

export const Users: FC = () => {
    const fakeData = [{name: "panky", age: 20}, {name: "abraham", age: 20}, {name: "jeff", age: 20}];

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
                <ColumnsUser data={fakeData}/>
            </tbody>
        </table>
    );
}