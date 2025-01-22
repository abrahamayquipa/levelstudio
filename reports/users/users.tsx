"use client"

import { User } from "@/types";
import { FC } from "react";

interface UserProps {
    data: User[];
}

export const Users: FC<UserProps> = ({data}) => {
    return (
        <tbody  className="table-row-group">
            {data.map((item, index) => (
                <tr key={index} className="table-row">
                    <td className="table-cell text-left">{item.name}</td>
                    <td className="table-cell text-left">{item.age}</td>
                    <td className="table-cell text-left">
                        <button className="btn btn-primary">
                            Editar
                        </button>
                        <button className="btn btn-danger ml-2">
                            Borrar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}