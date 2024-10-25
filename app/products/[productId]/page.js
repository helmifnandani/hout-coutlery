import Breadcrumb from '@/app/_components/Breadcrumb'
import ProductImage from '@/app/_components/ProductImage'
import RelatedProducts from '@/app/_components/RelatedProducts'
import TextDescription from '@/app/_components/TextDescription'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const page = () => {
    return (
        <div>
            <Breadcrumb />

            <div className="divide-y-2">
                <div className="grid grid-cols-2 gap-10 py-10">
                    <div>
                        <ProductImage />
                    </div>
                    <div className="flex flex-col divide-y-2">
                        <div className="space-y-5 pb-5">
                            <h2 className="text-sub-h-xl">Hampers Lebaran</h2>
                            <div className="inline-flex gap-6">
                                <h3 className="text-h2">
                                    Rp 150.000 - 250.000
                                </h3>
                                <div className="inline-flex items-center gap-2">
                                    <button className="flex items-center justify-center rounded-full border bg-white p-2">
                                        <HeartIcon className="h-5 w-5" />
                                    </button>
                                    <p className="text-body-xl">Wishlist</p>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 text-body-m text-primary-700">
                                    Select Type:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <button className="relative overflow-hidden border border-primary-700 bg-primary-700 px-6 py-4 text-body-s text-white">
                                        Hampers Lebaran A
                                        <span className="absolute right-0 top-0 z-50 text-primary-700">
                                            <CheckIcon className="size-4" />
                                        </span>
                                        <span className="absolute -right-6 top-0 h-6 w-14 rotate-45 bg-accent-background"></span>
                                    </button>
                                    <button className="border border-primary-700 px-6 py-4 text-body-s text-primary-700">
                                        Hampers Lebaran B
                                    </button>
                                    <button className="border border-primary-700 px-6 py-4 text-body-s text-primary-700">
                                        Hampers Lebaran C
                                    </button>
                                    <button className="border border-primary-700 px-6 py-4 text-body-s text-primary-700">
                                        Hampers Lebaran D
                                    </button>
                                </div>
                            </div>
                            <p className="text-sub-h-m">
                                <span className="text-gray-500">
                                    Availability:{' '}
                                </span>
                                <span className="text-primary-500">
                                    Ready Stock{' '}
                                </span>
                            </p>
                            <div className="space-xy2 flex flex-col">
                                <p className="text-sub-h-m text-gray-500">
                                    Description
                                </p>
                                <TextDescription />
                            </div>
                        </div>
                        <div className="py-5">
                            <p className="mb-2 text-sub-h-m text-primary-700">
                                Shop Here:
                            </p>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center gap-3 border border-primary-700 p-4">
                                    Shopee
                                    <span>
                                        <ArrowUpRightIcon className="size-3" />
                                    </span>
                                </button>
                                <button className="flex items-center justify-center gap-3 border border-primary-700 p-4">
                                    Tokopedia
                                    <span>
                                        <ArrowUpRightIcon className="size-3" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <h3 className="mb-10 text-h1">Other Product</h3>
                    <div className="py-10">
                        <RelatedProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
