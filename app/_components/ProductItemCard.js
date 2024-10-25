import Image from 'next/image'
import React from 'react'
import product1 from '@/app/_images/product1.jpg'
import { HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProductItemCard = ({ isSoldout }) => {
    return (
        <div className="relative flex w-36 flex-col items-center gap-2 text-center md:w-auto">
            <div className="absolute left-0 top-0 z-50 flex translate-x-2 translate-y-2 items-center justify-center rounded-full border bg-white p-2">
                <HeartIcon className="h-5 w-5" />
            </div>
            <Link
                href="/products/123"
                className={`relative aspect-card-sm w-full overflow-hidden md:aspect-card md:h-96 ${isSoldout && 'pointer-events-none'}`}
            >
                <Image
                    src={product1}
                    fill
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    alt="Product Item 1"
                />
                {isSoldout && (
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
                        href="/products/123"
                        className={`text-body-m lg:text-body-xl ${isSoldout && 'pointer-events-none text-accent-gray'}`}
                    >
                        Hampers Lebaran
                    </Link>
                    <p
                        className={`${isSoldout ? 'text-accent-gray' : 'text-primary-600'} text-body-s lg:text-body-m`}
                    >
                        Rp 150.000
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p
                        className={`${isSoldout ? 'text-accent-gray' : 'text-primary-700'} text-body-s lg:text-body-m`}
                    >
                        Available on:
                    </p>
                    <div className="flex gap-2">
                        <button
                            className={`${isSoldout ? 'pointer-events-none border-accent-gray text-accent-gray' : 'border-primary-500 text-primary-500'} rounded-3xl border px-3 py-1 text-regular-m md:px-4 md:py-2 lg:text-body-s`}
                        >
                            Shopee
                        </button>
                        <button
                            className={`${isSoldout ? 'pointer-events-none border-accent-gray text-accent-gray' : 'border-primary-500 text-primary-500'} rounded-3xl border px-3 py-1 text-regular-m md:px-4 md:py-2 lg:text-body-s`}
                        >
                            Tokopedia
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemCard
