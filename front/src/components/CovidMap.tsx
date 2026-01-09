'use client'

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  MapControls   
} from "@/components/ui/map";
import { Card } from "@/components/ui/card"
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllStates } from "@/services/covid";

export const CovidMap = () => {

    const { data } = useSuspenseQuery({
        queryKey: ['states'],
        queryFn: getAllStates
    })

    return(
        <Card className="mt-6 h-125 p-0 overflow-hidden max-w-6xl mx-auto">
            <Map center={[ -51.9253, -14.2350]} zoom={4}>
                <MapControls />
                {data.map((state) => (
                    <MapMarker
                        key={state.estado}
                        longitude={state.longitude}
                        latitude={state.latitude}
                        color="green"
                    >
                        <MarkerContent>
                            <div className="size-4 rounded-full bg-primary border-2 border-white shadow-lg" />
                        </MarkerContent>
                        <MarkerTooltip>{state.estado}</MarkerTooltip>
                        <MarkerPopup>
                            <div className="space-y-1">
                                <p className="font-medium text-foreground">{state.estado}</p>
                                <p className="text-xs text-muted-foreground">
                                    {state.mortes} de mortos pela covid-19
                                </p>
                            </div>
                        </MarkerPopup>
                    </MapMarker>
                ))}
            </Map>
        </Card>
    )
}