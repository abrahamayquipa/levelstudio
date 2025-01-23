import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@levelstudio/components/ui/dialog";
import { AddUserForm } from "./add";


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

export function AddUser() {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <AddUserForm />
        </DialogContent>
    );
}