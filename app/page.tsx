import { Main, Menu } from "@levelstudio/components/layout";
import { DialogProvider } from "@levelstudio/contexts/dialog";
import { dialogs } from "@levelstudio/components/users";

export default function Home() {
    return (
        <DialogProvider dialogs={dialogs}>
            <section className="flex">
                <Menu />
                <Main />
            </section>
        </DialogProvider>
    );
}