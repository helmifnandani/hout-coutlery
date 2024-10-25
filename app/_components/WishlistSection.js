import React from 'react'
import ProductItemCard from './ProductItemCard'

const WishlistSection = () => {
    return (
        <div className="py-2">
            <h2 className="mb-6 text-h2 text-primary-500">Wishlist</h2>
            <div className="flex flex-wrap gap-4">
                <ProductItemCard />
                <ProductItemCard />
                <ProductItemCard />
                <ProductItemCard />
                <ProductItemCard />
                <ProductItemCard />
            </div>
        </div>
    )
}

export default WishlistSection
