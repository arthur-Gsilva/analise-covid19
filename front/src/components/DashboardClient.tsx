'use client';

import { BarDashboard } from "@/components/BarDashboard";
import { LetalidadeChart } from "@/components/LetalidadeChart";
import { getAllStates } from "@/services/covid";
import { useSuspenseQuery } from "@tanstack/react-query";

const DashboardClient = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['states'],
    queryFn: getAllStates,
  });

  return (
    <>
      <BarDashboard
        registros={data}
        title="Casos confirmados por estado"
        target="casos_confirmados"
        color="#6366f1"
      />

      <BarDashboard
        registros={data}
        title="Mortes confirmadas por estado"
        target="mortes"
        color="#C82909"
      />

      <LetalidadeChart registros={data} />
    </>
  );
};

export default DashboardClient;
