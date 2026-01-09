import { Registro } from '@/types/registro'
import {
    ResponsiveContainer,
    ComposedChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Scatter
} from 'recharts'

type Props = {
    registros: Registro[]
}

// ---------- Tooltip personalizado ----------
type CustomTooltipProps = {
    active?: boolean
    payload?: { value: number }[]
    label?: string
}

const LetalidadeTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (!active || !payload || !payload.length) return null

    const value = payload[0].value
    const percent = Number(value)

    return (
        <div className="bg-white rounded-lg shadow-md px-3 py-2 border text-sm">
            <p className="font-semibold text-gray-800">{label}</p>
            <p className="text-red-500">
                {Number.isNaN(percent) ? '0.00%' : `${percent.toFixed(2)}%`}
            </p>
        </div>
    )
}

const formatPercent = (value: unknown) => {
    const num = Number(value)
    if (Number.isNaN(num)) return '0.00%'
    return `${num.toFixed(2)}%`
}

export const LetalidadeChart = ({ registros }: Props) => {
    return (
        <div className="mx-auto max-w-6xl h-125 bg-white rounded-xl p-4 shadow-md mt-8 pb-8">
            <h2 className="text-center text-black text-lg mb-6">
                Taxa de letalidade por Estado (%)
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    data={registros}
                    margin={{ top: 20, right: 40, left: 30, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <YAxis
                        dataKey="estado"
                        type="category"
                        tick={{ fontSize: 12 }}
                    />

                    <XAxis
                        type="number"
                        domain={[1, 3]}
                        tickFormatter={formatPercent}
                    />

                    <Tooltip content={<LetalidadeTooltip />} />

                    <Scatter
                        dataKey="taxa_letalidade"
                        fill="#ef4444"
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}
