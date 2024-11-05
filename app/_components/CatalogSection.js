import Link from 'next/link'
import React from 'react'
import ProductItemCard from './ProductItemCard'
import { getCatalogSection } from '../_lib/data-service'
import ImageComponent from './ImageComponent'

const CatalogSection = async ({ hasBanner = true, id }) => {
    const data = await getCatalogSection(id)
    const {
        name,
        image,
        description,
        catalog_product,
        id: catalogId,
    } = data[id]

    return (
        <>
            {hasBanner && (
                <div className="relative aspect-3x2 w-full md:aspect-4x1">
                    <ImageComponent
                        src={image}
                        className="object-cover"
                        alt={name}
                    />
                    <div className="absolute h-full w-full bg-black opacity-40"></div>
                    <div className="absolute flex h-full w-full flex-col items-center justify-center gap-6 text-center">
                        <h3 className="text-h2 text-white lg:text-h1">
                            {name}
                        </h3>
                        <p className="w-3/4 text-body-m text-white lg:w-1/3 lg:text-body-xl">
                            {description}
                        </p>
                    </div>
                </div>
            )}
            <div className="relative px-5 py-8 md:px-20 md:py-16">
                <div className="mb-10 flex items-center justify-between">
                    <p className="text-sub-h-m lg:text-sub-h-xl">{name}</p>
                    <Link
                        href={{
                            pathname: `/products`,
                            query: { catalog: catalogId, search: '' },
                        }}
                    >
                        View All
                    </Link>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                    {catalog_product.map((product) => (
                        <ProductItemCard
                            key={product.id}
                            product={product.products}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CatalogSection
