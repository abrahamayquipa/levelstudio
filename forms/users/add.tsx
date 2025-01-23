"use client"

import * as React from "react";
import { DialogHeader, DialogTitle, DialogFooter } from "@levelstudio/components/ui/dialog";


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

// Definición del componente Input
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`border px-4 py-2 rounded ${className}`}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

// Definición del componente Label
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={`block text-sm font-medium text-gray-700 ${className}`}
                {...props}
            />
        );
    }
);
Label.displayName = "Label";

export function AddUserForm() {
    return (
        <form className="grid gap-4 py-4">
            <DialogHeader>
                <DialogTitle>Añadir Nuevo</DialogTitle>
            </DialogHeader>
            <hr className="border-t border-black my-2" />
            <div className="grid gap-1">
                <Label htmlFor="name">
                    Nombre
                </Label>
                <Input
                    id="name"
                    placeholder="Escribir"
                />
            </div>
            <div className="grid gap-1">
                <Label htmlFor="age">
                    Edad
                </Label>
                <Input
                    id="age"
                    placeholder="Escribir"
                />
            </div>
            <DialogFooter>
                <Button type="submit" className="w-full">Añadir</Button>
            </DialogFooter>
        </form>
    );
}