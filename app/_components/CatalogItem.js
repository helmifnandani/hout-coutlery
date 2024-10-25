import banner1 from '@/app/_images/banner1.jpg'
import Image from 'next/image'

const CatalogItem = ({ children }) => {
    return (
        <div className="flex-shrink-0 snap-start">
            <div className="aspect-4x3 relative w-48">
                <Image
                    src={banner1}
                    fill
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    alt="Package 1"
                />
                <div className="absolute h-full w-full bg-black opacity-30"></div>
                <div className="absolute bottom-0 flex w-full -translate-y-4 flex-col items-center justify-center text-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CatalogItem
