import React from 'react'
import { getFooterBanner } from '../_lib/data-service'
import ImageComponent from './ImageComponent'
import Link from 'next/link'

const GridItem = async ({ id, linkClass }) => {
    const data = await getFooterBanner(1)
    const { name, image, id: catalogId } = data[id]
    return (
        <>
            <ImageComponent src={image} className="object-cover" alt={name} />
            <Link
                href={{
                    pathname: `/products`,
                    query: { catalog: catalogId },
                }}
                className="absolute h-full w-full bg-black opacity-30"
            ></Link>
            <div className="absolute bottom-0 left-0 z-40 flex translate-x-6 flex-col items-center justify-center gap-6 text-center">
                <Link
                    href={{
                        pathname: `/products`,
                        query: { catalog: catalogId },
                    }}
                    className="mb-6 text-h2 text-white lg:text-body-xl"
                >
                    {name}
                </Link>
            </div>
        </>
    )
}

export default GridItem
