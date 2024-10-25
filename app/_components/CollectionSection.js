import Link from 'next/link'
import React from 'react'
import ProductItemCard from './ProductItemCard'
import Image from 'next/image'
import banner1 from '@/app/_images/banner1.jpg'

const CollectionSection = () => {
    return (
        <>
            <div className="aspect-3x2 md:aspect-4x1 relative w-full">
                <Image
                    src={banner1}
                    fill
                    placeholder="blur"
                    quality={80}
                    className="object-cover"
                    alt="Package 1"
                />
                <div className="absolute h-full w-full bg-black opacity-40"></div>
                <div className="absolute flex h-full w-full flex-col items-center justify-center gap-6 text-center">
                    <h3 className="text-h2 text-white lg:text-h1">
                        Coutlery Set
                    </h3>
                    <p className="w-3/4 text-body-m text-white lg:w-1/3 lg:text-body-xl">
                        Products are Made of Natural Wood, Which Will not
                        Pollute the Environment
                    </p>
                </div>
            </div>
            <div className="relative px-5 py-8 md:px-20 md:py-16">
                <div className="mb-10 flex items-center justify-between">
                    <p className="text-sub-h-m lg:text-sub-h-xl">
                        Coutlery Set
                    </p>
                    <Link
                        href="/"
                        className="text-body-s underline lg:text-body-xl"
                    >
                        View All
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-around gap-6">
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard isSoldout={true} />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                </div>
            </div>
        </>
    )
}

export default CollectionSection
