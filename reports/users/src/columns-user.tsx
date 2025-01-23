"use client"

import { User } from "@levelstudio/types";
import { FC } from "react";
import { EditIcon } from "@levelstudio/components/ui";
import { DeleteIcon } from "@levelstudio/components/ui";

interface UserProps {
    data: User[];
}

export const ColumnsUser: FC<UserProps>  = ({data}) => {
    return (
        <>
            {data.map((item, index) => (
                <tr key={index} className={`py-16 ${index % 2 === 0 ? "bg-[#a5a5a5] bg-opacity-10" : ""}`}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.age}</td>
                    <td className="flex px-4 py-2">
                        <button className="mr-8">
                            <DeleteIcon/>
                        </button>
                        <button>
                            <EditIcon/>
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}