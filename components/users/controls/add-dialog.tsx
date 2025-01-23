import * as React from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import { AddUser } from "@levelstudio/forms/users/add-user";
import { Button } from "@levelstudio/components/ui/button";

export function AddDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Nuevo</Button>
            </DialogTrigger>
            <AddUser />
        </Dialog>
    );
}