export const dynamic = 'force-dynamic';

import { CovidMap } from "@/components/CovidMap";

const page = () => {
    return (
        <main>
            <h1 className="text-white text-center pt-12 text-2xl font-bold">
                Mapa interativo de Covid no Brasil
            </h1>
            <CovidMap />
        </main>
    );
};

export default page;
