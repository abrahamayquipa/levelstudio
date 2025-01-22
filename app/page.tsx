import { Main } from "@/components/layout";
import {Menu} from "@/components/layout/controls/menu";

export default function Home() {
    return (
        <section className="flex">
            <Menu />
            <Main />
        </section>
    );
}