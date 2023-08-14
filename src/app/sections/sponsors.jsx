import HeadingComponent from "../components/HeadingComponent"
import NestedSection from "../components/NestedSection"

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'First stat', value: '12' },
    { name: 'Second', value: '300+' },
    { name: 'Third', value: '40' },
    { name: 'Fourth', value: 'Unlimited' },
]

export default function Sponsors() {
    return (
        <NestedSection>
            <div className="overflow-hidden py-24 sm:py-32">
                {/* box start */}
                <div className="mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <HeadingComponent text="For sponsors/CRO" />
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We offer cooperation in the recruitment of patients for your clinical trials in hematology and oncology indications.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </NestedSection>
    )
}