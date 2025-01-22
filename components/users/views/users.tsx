"use client"

import { FC } from "react";
import { Users } from "@/reports";

export const User: FC = () => {
    const fakeData = [{name: "panky", age: 15}]
    return (
        <Users data={fakeData}/>
    );
}

export default User;