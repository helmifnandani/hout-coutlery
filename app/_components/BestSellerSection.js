import Link from 'next/link'
import React from 'react'
import ProductItemCard from './ProductItemCard'

const BestSellerSection = () => {
    return (
        <div className="relative px-5 py-8 md:px-20 md:py-16">
            <div className="mb-10 flex items-center justify-between">
                <p className="text-sub-h-m lg:text-sub-h-xl">
                    Best Seller Product
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
                <ProductItemCard isSoldout={true} />
                <ProductItemCard />
                <ProductItemCard />
            </div>
        </div>
    )
}

export default BestSellerSection
