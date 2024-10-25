import React from 'react'
import ProductItemCard from './ProductItemCard'

const ProductList = () => {
    return (
        <div>
            <div className="mb-6 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
                <div>
                    <p className="text-center text-h4 lg:text-start lg:text-h2">
                        Showing all categories
                    </p>
                    <p className="text-center text-regular-m lg:text-start lg:text-body-m">
                        Showing 100 items in all categories
                    </p>
                </div>
                {/* <div className="flex gap-4">
                    <select className="rounded-md border border-accent-gray px-4 py-3">
                        <option>Available</option>
                        <option>Pre Order</option>
                        <option>Sold Out</option>
                    </select>
                    <button className="rounded-md bg-primary-500 px-5 py-3 text-body-m text-white">
                        Filter
                    </button>
                </div> */}
            </div>
            <div className="flex flex-wrap items-center justify-around gap-6">
                <ProductItemCard />
                <ProductItemCard />
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

export default ProductList
