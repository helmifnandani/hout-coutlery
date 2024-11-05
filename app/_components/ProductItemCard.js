import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ImageComponent from './ImageComponent'
import placeholderImg from '@/app/_images/placeholder.png'

const ProductItemCard = ({ product }) => {
    const imgProduct =
        product?.product_images.find((image) => image.is_primary) ||
        product?.product_images[0] ||
        placeholderImg

    return (
        <div className="relative flex w-36 flex-col items-center gap-2 text-center md:w-auto">
            {/* <div className="absolute left-0 top-0 z-50 flex translate-x-2 translate-y-2 items-center justify-center rounded-full border bg-white p-2">
                <HeartIcon className="h-5 w-5" />
            </div> */}
            <Link
                href={`/products/${product?.id}`}
                className={`relative aspect-card-sm w-full overflow-hidden md:aspect-card md:h-96 ${product?.status === 'out-of-stock' && 'pointer-events-none'}`}
            >
                <ImageComponent
                    src={imgProduct?.image_url}
                    className="object-cover"
                    alt={product?.name}
                />
                {product?.status === 'out-of-stock' && (
                    <>
                        <div className="absolute -right-[30px] top-[25px] z-50 w-36 rotate-45 bg-accent-gray text-body-xl text-white">
                            Sold Out
                        </div>
                        <div className="absolute top-0 z-40 h-full w-full bg-black opacity-40"></div>
                    </>
                )}
            </Link>
            <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center">
                    <Link
                        href={`/products/${product?.id}`}
                        className={`text-body-m lg:text-body-xl ${product?.status === 'out-of-stock' && 'pointer-events-none text-accent-gray'}`}
                    >
                        {product?.name}
                    </Link>
                    <p
                        className={`${product?.status === 'out-of-stock' ? 'text-accent-gray' : 'text-primary-600'} text-body-s lg:text-body-m`}
                    >
                        {product?.price}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p
                        className={`${product?.status === 'out-of-stock' ? 'text-accent-gray' : 'text-primary-700'} text-body-s lg:text-body-m`}
                    >
                        Available on:
                    </p>
                    <div className="flex gap-2">
                        <Link
                            target="_blank"
                            href={product?.url_shopee || 'http://shopee.co.id/'}
                            className={`${product?.status === 'out-of-stock' ? 'pointer-events-none border-accent-gray text-accent-gray' : 'border-primary-500 text-primary-500'} rounded-3xl border px-3 py-1 text-regular-m md:px-4 md:py-2 lg:text-body-s`}
                        >
                            Shopee
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                product?.url_tokopedia ||
                                'https://tokopedia.co.id'
                            }
                            className={`${product?.status === 'out-of-stock' ? 'pointer-events-none border-accent-gray text-accent-gray' : 'border-primary-500 text-primary-500'} rounded-3xl border px-3 py-1 text-regular-m md:px-4 md:py-2 lg:text-body-s`}
                        >
                            Tokopedia
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemCard
