import HeadingComponent from "../components/HeadingComponent";
import NestedSection from "../components/NestedSection";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Medical Board',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maiores esse. Est autem iusto provident?',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Analyze the data',
        description: 'Provided by patients, conducts free oncological consultations using telemedicine tools and makes decisions regarding recommendations for further treatment of cancer diseases for patients who report to our registry.',
        icon: LockClosedIcon,
    },
    {
        name: 'Medical Board',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maiores esse. Est autem iusto provident?',
        icon: ServerIcon,
    },
]

export default function Example() {
    return (
        <div className="overflow-hidden py-24 sm:py-32" id="aboutus">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="w-full">
                            <HeadingComponent text="About Us" />
                            <p className="mt-6 text-lg leading-8 ">
                                We use the data to connect patients with clinical trial centers that can offer the most favorable therapeutic options. Our register is supervised by the Medical Board.
                            </p>
                            <dl className="mt-10 text-base leading-7 grid lg:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-black-pearl-400" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}