'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ImageComponent from './ImageComponent'

const CatalogItem = ({ id, children, src, name }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get('catalog') ?? 'all'

    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams)
        params.set('catalog', filter)
        params.delete('search')
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
    return (
        <div>
            <button onClick={() => handleFilter(id)}>
                <div className="relative aspect-4x3 w-48">
                    <ImageComponent
                        src={src}
                        className="object-cover"
                        alt={name}
                    />
                    <div className="absolute h-full w-full bg-black opacity-30"></div>
                    <div className="absolute bottom-0 flex w-full -translate-y-4 flex-col items-center justify-center text-center">
                        {children}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default CatalogItem
