"use client"

import { User } from "@/types";
import { FC } from "react";
import Image from "next/image";
import editIcon from "@/components/icons/edit.png";
import deleteIcon from "@/components/icons/delete.png";

interface UserProps {
    data: User[];
}

export const Users: FC<UserProps> = ({data}) => {
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={index} className={`py-16 ${index % 2 === 0 ? "bg-[#a5a5a5] bg-opacity-10" : ""}`}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.age}</td>
                    <td className="flex px-4 py-2">
                        <button className="mr-8">
                            <Image src={deleteIcon} width={15} height={15} alt="delete"/>
                        </button>
                        <button>
                            <Image src={editIcon} width={25} height={25}  alt="edit"/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}