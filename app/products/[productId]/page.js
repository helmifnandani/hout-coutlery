import Breadcrumb from '@/app/_components/Breadcrumb'
import ProductDetail from '@/app/_components/ProductDetail'
import Spinner from '@/app/_components/Spinner'
import { getProduct, getRelatedProducts } from '@/app/_lib/data-service'
import React, { Suspense } from 'react'

const page = async ({ params }) => {
    const product = await getProduct(params.productId)
    const relatedProducts = await getRelatedProducts(params.productId)

    return (
        <div>
            <Breadcrumb />
            <div className="overflow-hidden px-4 py-6 md:px-20">
                <Suspense fallback={<Spinner />}>
                    <ProductDetail
                        product={product}
                        relatedProducts={relatedProducts}
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default page
