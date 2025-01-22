"use client";

import { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import homeIcon from "@/components/icons/home.png";
import leafIcon from "@/components/icons/leaf.png";
import settingsIcon from "@/components/icons/settings.png";
import arrowIcon from "@/components/icons/arrow.png";

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
            } flex flex-col justify-between items-start shadow-lg relative h-full rounded-r-3xl`}
        >
            <button
                onClick={toggleMenu}
                className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-[#5f6c37] rounded-full w-10 h-10 flex items-center justify-center border-8 border-[#f6f5f1]"
            >
                <Image src={arrowIcon} alt="leaf" />
            </button>
            <section className="flex flex-col justify-between px-4 h-full w-full text-white">
                <div className="mt-40">
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4a5730] rounded-md">
                        <Image src={homeIcon} alt="home" className="mr-2" />
                        {isOpen && <span>Inicio</span>}
                    </button>
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4a5730] rounded-md">
                        <Image src={leafIcon} alt="leaf" className="mr-2" />
                        {isOpen && <span>Usuarios</span>}
                    </button>
                </div>
                <div className="mb-16">
                    <button className="w-full flex items-center px-4 py-2 hover:bg-[#4a5730] rounded-md">
                        <Image src={settingsIcon} alt="settings" className="mr-2" />
                        {isOpen && <span>Ajustes</span>}
                    </button>
                </div>
            </section>
        </div>
    );
};