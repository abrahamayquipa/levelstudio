"use client"

import { useState } from "react";
import { DialogHeader, DialogTitle, DialogFooter } from "@levelstudio/components/ui/dialog";

export function AddUserForm() {
    const [data, setData] = useState({name: "", age: 0});

    const handleSubmit = (e: any) => {
        setData({
            name: e.target.name.value,
            age: parseInt(e.target.age.value),
        });
    };

    console.log(data);

    return (
        <form className="grid gap-4 py-4">
            <DialogHeader>
                <DialogTitle>Añadir Nuevo</DialogTitle>
            </DialogHeader>
            <hr className="border-t border-black my-2" />
            <div className="grid gap-1">
                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    placeholder="Escribir"
                    onChange={handleSubmit}
                />
            </div>
            <div className="grid gap-1">
                <label htmlFor="age">Edad</label>
                <input
                    id="age"
                    placeholder="Escribir"
                    onChange={handleSubmit}
                />
            </div>
            <DialogFooter>
                <button type="submit" className="w-full" >
                    Añadir
                </button>
            </DialogFooter>
        </form>
    );
}