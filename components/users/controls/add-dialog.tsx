"use client"

import { useDialog } from "@levelstudio/contexts/dialog";

export function AddDialog() {
    const { openDialog } = useDialog();

    return (
        <button
            onClick={() =>
                openDialog("add-user", {})
            }
        >
            Nuevo
        </button>
    );
}