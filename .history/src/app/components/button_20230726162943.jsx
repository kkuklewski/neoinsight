'use Client'

import Link from 'next/link';
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
export default function ButtonUI({ href, buttonName, style }) {

    if (style === 'dark') {
        return (
            <Link href={href}
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 font-medium text-center border rounded-md shadow-sm text-vista-blue-50 bg-vista-blue-500 hover:bg-vista-blue-700 focus:ring-2 focus:ring-vista-blue-500 focus:ring-opacity-50 border-vista-blue-500"
            >
                {buttonName}
            </Link>
        )
    } else if (style === 'link') {
        return (
            <Link href={href}
                className="inline-flex items-center text-base md:text-lg text-vista-blue-500 hover:text-vista-blue-600 font-semibold"
            >
                <ArrowSmallRightIcon className="h-6 w-6" />
                <span className="mr-3">{buttonName}</span>
            </Link>
        )
    } else {
        return (
            <Link href={href}
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 font-medium text-center border rounded-md shadow-sm text-coolGray-800 bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border-coolGray-200"
            >
                {buttonName}
            </Link>
        )
    }
}