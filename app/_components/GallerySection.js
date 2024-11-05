import localFont from 'next/font/local'
import GridItem from './GridItem'

const palatino = localFont({
    src: '../_fonts/Palatino.woff2',
    subsets: ['latin'],
    display: 'swap',
})
const GallerySection = async () => {
    return (
        <div className="px-20 py-20 pt-5">
            <h2
                className={`${palatino.className} mb-6 text-secondary-xs text-primary-700 md:text-secondary-l`}
            >
                Our Gallery
            </h2>
            <div className="flex grid-flow-col grid-cols-3 grid-rows-2 flex-col gap-4 lg:grid">
                <div className="relative row-span-2 aspect-1x1 lg:aspect-2x3">
                    <GridItem
                        id="image_1"
                        linkClass="row-span-2 aspect-1x1 lg:aspect-2x3"
                    />
                </div>
                <div className="relative col-span-2 aspect-1x1 lg:aspect-auto">
                    <GridItem id="image_2" />
                </div>
                <div className="relative aspect-1x1 lg:aspect-auto">
                    <GridItem id="image_3" />
                </div>
                <div className="relative aspect-1x1 lg:aspect-auto">
                    <GridItem id="image_4" />
                </div>
            </div>
        </div>
    )
}

export default GallerySection
