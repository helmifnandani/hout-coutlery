'use client'

import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumb = () => {
    const pathname = usePathname()
    return (
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-white px-6 py-7 md:px-20">
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
