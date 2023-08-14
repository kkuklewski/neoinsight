'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'start', href: '/' },
    { name: 'blog', href: 'blog' },
    { name: 'about', href: 'about' },
    { name: 'contact', href: '/contact' },
    { name: '404', href: '/contasfafact' },
]
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <header className="absolute top-0 inset-x-0 top-0 z-50">
                <div className="container px-4 max-w-screen-lg">
                    <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1 py-5">
                            <a href="/" className="-m-1.5 p-1.5 rounded-xl">
                                <span className='text-vista-blue-700 font-bold'>Site Name</span>
                                {/* <Image
                                    className="h-24 w-auto"
                                    src={logoWhite}
                                    alt=""
                                /> */}
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-vista-blue-950">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                            {/* <a target="_blank" href="https:/instagram.com/a1vstudio"><Image className="w-6 h-6" src={instagram} /></a>
                            <a target="_blank" href="https://dribbble.com/kamilfikou"><Image className="w-6 h-6" src={dribble} /></a> */}
                            <a href="mailto:lukasz@hivecv.com" className="font-bold text-vista-blue-950">
                                E-mail <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                </div>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                {/* <Image
                                    className="h-12 w-auto"
                                    src={logo}
                                    alt=""
                                /> */}
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="mailto:lukasz@hivecv.com"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Write me an e-mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
