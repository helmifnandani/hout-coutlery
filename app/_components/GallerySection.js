import localFont from 'next/font/local'
import GridItem from './GridItem'

const palatino = localFont({
    src: '../_fonts/Palatino.woff2',
    subsets: ['latin'],
    display: 'swap',
})
const GallerySection = () => {
    return (
        <div className="px-20 py-20 pt-5">
            <h2
                className={`${palatino.className} text-secondary-xs mb-6 text-primary-700 md:text-secondary-l`}
            >
                Our Gallery
            </h2>
            <div className="flex grid-flow-col grid-cols-3 grid-rows-2 flex-col gap-4 lg:grid">
                <div className="aspect-1x1 lg:aspect-2x3 relative row-span-2">
                    <GridItem>Coutlery Bundling</GridItem>
                </div>
                <div className="aspect-1x1 relative col-span-2 lg:aspect-auto">
                    <GridItem>Kitchen Set</GridItem>
                </div>
                <div className="aspect-1x1 relative lg:aspect-auto">
                    <GridItem>Cutlery</GridItem>
                </div>
                <div className="aspect-1x1 relative lg:aspect-auto">
                    <GridItem>Hampers Set</GridItem>
                </div>
            </div>
        </div>
    )
}

export default GallerySection
