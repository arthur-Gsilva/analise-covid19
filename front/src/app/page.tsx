'use client'

import { getPlaceInfo } from "@/services/covid";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

const page = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [query, setQuery] = useState("");

    const {
        data,
        isFetching,
        isError,
    } = useQuery({
        queryKey: ['place-info', query],
        queryFn: ({ queryKey }) => {
            const [, q] = queryKey as [string, string];
            return getPlaceInfo(q);
        },
        enabled: !!query,

        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: Infinity,
    });

    const handleSearch = () => {
        if (!inputRef.current) return;
        const value = inputRef.current.value.trim();
        if (!value) return;

        setQuery(value);
        inputRef.current.value = '';
    };

    return (
        <main className="w-full flex-1 flex flex-col items-center justify-center px-4">
            <h2 className="text-2xl font-semibold mb-6 text-white">
                Procure um Estado
            </h2>

            <div className="flex gap-2 mb-8 w-full max-w-sm">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Digite o nome de um estado"
                    disabled={isFetching}
                    className={`
                        flex-1 px-4 py-2 rounded-lg border
                        border-gray-300 bg-transparent text-white
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                />

                <button
                    onClick={handleSearch}
                    disabled={isFetching}
                    className={`
                        px-4 cursor-pointer py-2 rounded-lg text-white
                        bg-blue-500 hover:bg-blue-600
                        disabled:bg-blue-400 disabled:cursor-not-allowed
                    `}
                >
                    {isFetching ? 'Buscando...' : 'Buscar'}
                </button>
            </div>

            {isFetching && (
                <p className="text-white">Carregando...</p>
            )}

            {isError && (
                <div className="text-red-400">
                    Erro na API
                </div>
            )}

            {data && (
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">
                            {data.estado}
                        </h3>
                        <span className="text-sm text-gray-500">
                            {data.pais}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-500">Casos confirmados</p>
                            <p className="font-semibold">
                                {data.casos_confirmados.toLocaleString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Mortes</p>
                            <p className="font-semibold">
                                {data.mortes.toLocaleString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Taxa de incidência</p>
                            <p className="font-semibold">
                                {data.taxa_incidentes.toFixed(2)}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Taxa de letalidade</p>
                            <p className="font-semibold">
                                {data.taxa_letalidade.toFixed(2)}%
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default page;
