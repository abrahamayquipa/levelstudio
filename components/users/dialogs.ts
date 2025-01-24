import { Dialog } from "@levelstudio/contexts/dialog";
import { AddUser, EditUser } from "@levelstudio/forms";

export const dialogs: Dialog[] = [
    {
        name: "add-user",
        component: AddUser,
        title: "Registrar",
    },
    {
        name: "edit-user",
        component: EditUser,
        title: "Editar",
    },
];