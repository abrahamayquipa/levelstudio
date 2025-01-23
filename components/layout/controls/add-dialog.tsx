import * as React from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import { AddUser } from "@levelstudio/forms/users/add-user";

// Definición del componente Button
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`px-4 py-2 rounded bg-[#d19b36] ${className}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

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