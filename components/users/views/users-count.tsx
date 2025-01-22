"use client"

import { FC } from "react";

export const UsersCount: FC = () => {
    return (
        <div className="mr-2 px-8 py-2 bg-white rounded-xl">
            <span className="font-medium">Total: </span>
            <span className="font-medium text-slate-400">5452</span>
        </div>
    );
}

export default UsersCount;