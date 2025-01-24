"use client"

import { useDialog } from "@levelstudio/contexts/dialog";

export function AddDialog() {
    const { openDialog } = useDialog();

    return (
        <button
            className="mr-2 px-8 py-2 bg-[#d19b36] font-semibold text-white rounded-xl"
            onClick={() =>
                openDialog("add-user", {})
            }
        >
            Nuevo
        </button>
    );
}