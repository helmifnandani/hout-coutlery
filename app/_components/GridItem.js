import Image from 'next/image'
import React from 'react'
import banner1 from '@/app/_images/banner1.jpg'

const GridItem = ({ children, src }) => {
    return (
        <>
            <Image
                src={banner1}
                fill
                placeholder="blur"
                quality={100}
                className="object-cover"
                alt="Package 1"
            />
            <div className="absolute h-full w-full bg-black opacity-30"></div>
            <div className="absolute bottom-0 left-0 flex translate-x-6 flex-col items-center justify-center gap-6 text-center">
                <p className="mb-6 text-h2 text-white lg:text-body-xl">
                    {children}
                </p>
            </div>
        </>
    )
}

export default GridItem
