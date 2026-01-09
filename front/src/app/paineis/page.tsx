export const dynamic = 'force-dynamic';
import DashboardClient from "@/components/DashboardClient";


const page = () => {
    return (
        <main className="py-12 overflow-x-hidden">
            <h1 className="text-center text-white text-2xl font-bold">
                Dashboards comparativos entre Estados
            </h1>

            <DashboardClient />
        </main>
    );
};

export default page;
