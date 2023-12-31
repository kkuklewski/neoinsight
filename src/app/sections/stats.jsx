import NestedSection from "../components/NestedSection"

const stats = [
    { id: 1, name: 'leads', value: '10m' },
    { id: 2, name: 'patient in our databank', value: '46m' },
    { id: 3, name: 'company value', value: '46,000' },
]

export default function Stats() {
    return (
        <div className="max-w-2xl mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7">{stat.name}</dt>
                        <dd className="order-first text-3xl font-light tracking-tight sm:text-5xl">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}