"use client"

import {
    FC,
    createContext,
    useContext,
    useState,
    PropsWithChildren,
} from "react";
import {
    Dialog as DialogComponent,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@levelstudio/components/ui";
import { GreenLeafIcon } from "@levelstudio/components/ui";

export type Dialog = {
    name: string;
    component: any;
    title?: string;
    description?: string;
};

type UseDialog = PropsWithChildren & {
    dialogs: Dialog[];
};

interface UseCurrent {
    dialog: string;
    options?: any;
}

export type DialogContextType = {
    openDialog: <T>(a: string, options: T) => void;
    closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType>({
    openDialog: () => undefined,
    closeDialog: () => undefined,
});

const defaultCurrent = {
    dialog: "",
    options: {},
};

export const DialogProvider: FC<UseDialog> = ({ children, dialogs }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<UseCurrent>(defaultCurrent);

    const dialog = dialogs.find(({ name }) => name === current.dialog) || {
        component: () => <></>,
        name: "",
        title: "",
    };

    const onClose = () => {
        setCurrent(defaultCurrent);
        setOpen(false);
    };

    return (
        <DialogContext.Provider
            value={{
                openDialog: (name, options) => {
                    const exists = dialogs.map((v) => v.name).includes(name);
                    if (exists) {
                        setCurrent((_) => ({ dialog: name, options }));
                        setOpen(true);
                    }
                },
                closeDialog: onClose,
            }}
        >
            {children}
            <DialogComponent open={open} onOpenChange={setOpen}>
                <DialogContent className="w-[400px] bg-[#f6f5f1] rounded-xl">
                    <DialogHeader>
                        {dialog.title && (
                            <DialogTitle className="flex items-center t-title-large font-normal">
                                <GreenLeafIcon className="mr-2" />
                                {dialog.title}
                            </DialogTitle>
                        )}
                        {dialog.description && (
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        )}
                    </DialogHeader>
                    <hr className="h-px bg-[#dedede]" />
                    <dialog.component {...current.options} />
                </DialogContent>
            </DialogComponent>
        </DialogContext.Provider>
    );
};

export const useDialog = () => useContext(DialogContext);

export default DialogContext;