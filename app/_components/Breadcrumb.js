'use client'

import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumb = () => {
    const pathname = usePathname()
    return (
        <div className="relative w-screen overflow-hidden bg-white px-6 py-7 md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-20">
            <ol className="inline-flex items-center space-x-1 md:space-x-4">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sub-h-m text-primary-500"
                    >
                        Home
                    </Link>
                </li>
                {pathname
                    .split('/')
                    .slice(1)
                    .map((value, index) => {
                        return (
                            <li key={index} className="flex items-center">
                                <ChevronRightIcon className="mr-4 size-4" />
                                {index ===
                                pathname.split('/').slice(1).length - 1 ? (
                                    <span className="text-sub-h-m capitalize text-accent-gray">
                                        {value}
                                    </span>
                                ) : (
                                    <Link
                                        href={`/${value}`}
                                        className="text-sub-h-m capitalize text-accent-gray hover:text-primary-500"
                                    >
                                        {decodeURI(value)}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
            </ol>
        </div>
    )
}

export default Breadcrumb
