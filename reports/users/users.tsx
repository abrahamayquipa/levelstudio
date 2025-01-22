"use client"

import { User } from "@/types";
import { FC } from "react";

interface UserProps {
    data: User[];
}

export const Users: FC<UserProps> = ({data}) => {
    return (
        <table className="table w-full">
            <section className="table-header-group">
                <tr className="table-row">
                    <td className="table-cell text-left">Nombre</td>
                    <td className="table-cell text-left">Edad</td>
                    <td className="table-cell text-left">Operaciones</td>
                </tr>
            </section>
            <section className="table-row-group">
                {data.map((item, index) => (
                    <tr key={index} className="table-row">
                        <td className="table-cell text-left">{item.name}</td>
                        <td className="table-cell text-left">{item.age}</td>
                        <td className="table-cell text-left">
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger ml-2">Borrar</button>
                        </td>
                    </tr>
                ))}
            </section>
        </table>
    );
}