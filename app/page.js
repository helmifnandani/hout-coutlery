import Hero from './_components/Hero'
import CatalogSection from './_components/CatalogSection'
import GallerySection from './_components/GallerySection'

export default function Home() {
    return (
        <div>
            <Hero />
            <CatalogSection id={'catalog_1'} hasBanner={false} />
            <CatalogSection id={'catalog_2'} />
            <CatalogSection id={'catalog_3'} />
            <GallerySection />
        </div>
    )
}
