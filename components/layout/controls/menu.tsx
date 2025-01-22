"use client";

import { FC, JSX } from "react";
import { useState } from "react";

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`bg-[#5f6c37] transition-all duration-300 ${
                isOpen ? "w-48" : "w-0 px-0"
            } flex flex-col justify-between items-start px-4 shadow-lg relative h-full rounded-r-2xl`}
        >
            {/* abrir y cerrar menu */}
            <button
                onClick={toggleMenu}
                className="absolute top-1/2 right-[-12px] transform -translate-y-1/2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center shadow-md"
            >
                {isOpen ? "←" : "→"}
            </button>

            {/* menu */}
            <section className="flex flex-col justify-between h-full w-full text-white">
                <div className="mt-40">
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4e5a2d] rounded-md">
                        <span className="material-icons"></span>
                        {isOpen && <span>Inicio</span>}
                    </button>
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4e5a2d] rounded-md">
                        <span className="material-icons"></span>
                        {isOpen && <span>Usuarios</span>}
                    </button>
                </div>
                <div className="mb-8">
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4e5a2d] rounded-md">
                        <span className="material-icons"></span>
                        {isOpen && <span>Ajustes</span>}
                    </button>
                </div>
            </section>
        </div>
    );
};