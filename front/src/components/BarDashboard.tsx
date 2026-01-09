import { Registro } from '@/types/registro'
import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

type Props = {
    registros: Registro[]
    title: string
    target: keyof Registro,
    color: string
}

const formatNumber = (value?: number) => {
    if (value === undefined || value === null) return '0'

    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(1)}M`
    }

    if (value >= 1_000) {
        return `${(value / 1_000).toFixed(1)}k`
    }

    return value.toString()
}

export const BarDashboard = ({ registros, title, target, color }: Props) => {
    return (
        <div className="mx-auto max-w-6xl mt-12 px-4">
            <h2 className="text-center text-white text-lg mb-6">
                {title}
            </h2>

            <div className="w-full h-100 bg-white rounded-xl p-4 shadow-md">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={registros}
                        margin={{ top: 20, right: 30, left: 30, bottom: 80 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="estado"
                            angle={-90}
                            textAnchor="end"
                            interval={0}
                            height={80}
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            tickFormatter={formatNumber}
                            tick={{ fontSize: 12 }}
                        />

                        <Tooltip
                            formatter={(value) => formatNumber(value as number)}
                        />

                        <Bar
                            dataKey={target}
                            fill={color}
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
