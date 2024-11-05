import React from 'react'
import ProductItemCard from './ProductItemCard'
import { getProducts } from '../_lib/data-service'

const ProductList = async ({ filter, search }) => {
    const products = await getProducts(filter, search)
    const catalogName =
        products?.at(0).catalog_product?.at(0).catalogs?.name ?? 'all'
    return (
        <div>
            <div className="mb-6 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
                <div>
                    <p className="text-center text-h4 lg:text-start lg:text-h2">
                        {!search && `Showing ${catalogName} categories`}
                        {search && `Searched Result for "${search}"`}
                    </p>
                    <p className="text-center text-regular-m lg:text-start lg:text-body-m">
                        Showing {products.length} item
                        {products.length > 1 ? 's' : ''}
                        {!search && `in ${catalogName} categories`}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                {!products.length > 0 && (
                    <div className="flex h-full w-full items-center justify-center">
                        <p className="text-3xl font-semibold">No Products</p>
                    </div>
                )}
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductItemCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    )
}

export default ProductList
