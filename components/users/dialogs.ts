import { Dialog } from "@levelstudio/contexts/dialog";
import {AddUser, DeleteUser, EditUser} from "@levelstudio/forms";

export const dialogs: Dialog[] = [
    {
        name: "add-user",
        component: AddUser,
        title: "Añadir usuario",
    },
    {
        name: "edit-user",
        component: EditUser,
        title: "Editar usuario",
    },
    {
        name: "delete-user",
        component: DeleteUser,
        title: "Eliminar usuario",
    },
];