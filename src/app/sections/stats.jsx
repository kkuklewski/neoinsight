import NestedSection from "../components/NestedSection"

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Stats() {
    return (
        <div className="max-w-7xl mt-12">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
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