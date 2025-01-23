import * as React from "react";
import { DialogContent } from "@levelstudio/components/ui/dialog";
import { AddUserForm } from "./add";

export function AddUser() {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <AddUserForm />
        </DialogContent>
    );
}